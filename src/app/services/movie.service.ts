import { CommonService } from './common.service';
import { AuthService } from './auth.service';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class MovieService {
  categories = []
  url: string;
  api_key: string;
  movies: Array<any> = []
  top_rated_movies: Array<any> = []
  popular_movies: Array<any> = []
  upcoming_movies: Array<any> = []
  categoryMovies: Array<any> = []
  movieDetail: any = {}
  total_pages: number = 0
  searchResult: Array<any> = []
  comments: Array<any> = []
  paginateIsFinish: boolean = false

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private commonService: CommonService,
    private router: Router
  ) {
    this.url = environment.baseApiUrl
    this.api_key = environment.api_key
  }

  getCategories() {
    this.http.get<any>(this.url + "genre/movie/list" + this.api_key)
      .subscribe(res => {
        res.genres.forEach(item => {
          this.categories.push(item)
        })
      })
  }

  getSpecificCategoryOfMovies(categoryName, page) {
    this.http.get<any>(this.url + "movie/" + categoryName + this.api_key + "&page=" + page)
      .subscribe(res => {
        if (categoryName === 'top_rated') this.top_rated_movies = res.results
        if (categoryName === 'upcoming') this.upcoming_movies = res.results
        if (categoryName === 'popular') this.popular_movies = res.results
        this.total_pages = res.total_pages
      })

  }

  getMovieDetail(movieId) {
    this.http.get<any>(this.url + "movie/" + movieId + this.api_key)
      .subscribe(res => {

        this.movieDetail = res
        console.log(this.movieDetail)
      })
  }

  getAllMovies(pageCount?: number) {
    let page: number = 1
    let temp = pageCount > page ? pageCount : page
    page = temp

    this.http.get<any>(this.url + "discover/movie" + this.api_key + `&page=${page}`)
      .subscribe(res => {
        this.total_pages = res.total_pages
        this.movies = res.results
      })
  }

  getMovieByGenre(genreId: number, pageCount?: number) {
    this.http.get<any>(this.url + "discover/movie" + this.api_key + "&with_genres=" + genreId + "&page=" + pageCount)
      .subscribe(res => {
        this.total_pages = res.total_pages
        this.categoryMovies = res.results
      })
  }

  searchMovie(keyword, page) {
    this.http.get<any>(this.url + 'search/movie' + this.api_key + "&query=" + keyword + "&page=" + page)
      .subscribe(res => {
        this.searchResult = res.results
        this.total_pages = res.total_pages
      }, err => { console.log(err) })
  }

  addComment(comment, isSpoiler) {
    if (comment !== "") {
      console.log(comment, isSpoiler)

      let commentPost = {
        user: this.authService.signedInUser._id,
        movieId: this.movieDetail.id,
        text: comment,
        isSpoiler
      }



      this.http.post(environment.baseApiUrl2 + "comment/newComment", commentPost)
        .subscribe(res => {
          console.log(res)

        }, err => { console.log(err) })
    }
  }

  rateMovie(rate) {
    let postData = { movieId: this.movieDetail.id, rate, user: this.authService.signedInUser._id }

    this.http.post<any>(environment.baseApiUrl2 + "rate/add", postData)
      .subscribe(res => {
        this.authService.signedInUser.ratedMovies = res.ratedMovieList

        const oldData = JSON.parse(localStorage.getItem('authentication'))
        const newAuthData = { ...oldData, user: this.authService.signedInUser }

        localStorage.setItem('authentication', JSON.stringify(newAuthData))

      }, err => { console.log(err) })
  }

  addToFavorites() {
    const movieId = this.movieDetail.id
    const userId = this.authService.signedInUser._id
    const title = this.movieDetail.title
    const postData = { movieId, title, userId }


    this.http.post<any>(environment.baseApiUrl2 + "movie/addFav", postData)
      .subscribe(res => {
        this.authService.signedInUser.favMovies = res.favMovies
        const oldData = JSON.parse(localStorage.getItem('authentication'))
        const newData = { ...oldData, user: this.authService.signedInUser }
        console.log(res)
        this.commonService.presentToast(res.message)
        localStorage.setItem('authentication', JSON.stringify(newData))
      }, err => { console.log(err) })
  }

  getComments(movieId, page) {
    if (!this.paginateIsFinish) {
      this.http.get<any>(environment.baseApiUrl2 + 'comment/getComments/' + movieId + "?page=" + page + "&limit=5")
        .subscribe(res => {
          res.comments.forEach(comment => this.comments.push(comment))

          this.paginateIsFinish = res.isFinish
        }, err => { console.log(err) })
    }
  }

}
