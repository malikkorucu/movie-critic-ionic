import { CommonService } from './../../services/common.service';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import { StarRatingComponent } from 'ng-starrating';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.page.html',
  styleUrls: ['./movie-detail.page.scss'],
})
export class MovieDetailPage implements OnInit {

  showComments: boolean = false
  rate: string = "0"
  showAllText = true

  constructor(
    public route: ActivatedRoute,
    public movieService: MovieService,
    public authService: AuthService,
    public commonService:CommonService
  ) { }

  ngOnInit() {
    let movieId = this.route.snapshot.params.movieId
    this.movieService.getMovieDetail(movieId)
    this.movieService.getComments(movieId, 1)

    if (this.authService.isSignedIn) {
      let ratedMoviesOfUser = this.authService.signedInUser.ratedMovies
      const thisMovie = ratedMoviesOfUser.find(item => item.movieId === movieId)

      if (thisMovie) {
        this.rate = thisMovie.rate
      }
    }
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.movieService.paginateIsFinish = false
    this.movieService.comments = []
    console.log(this.movieService.paginateIsFinish)
  }
  includeCheck() {
    const m = this.authService.signedInUser.favMovies.find(item => item.movieId === this.movieService.movieDetail.id)

    if (!m) {
      return false
    } else { 
      return true
    }
  }



  onRateChange(e) {
    if (confirm('oylama yapmak istediginden emin misin ??')) {
      this.movieService.rateMovie(e)
    }
  }
}
