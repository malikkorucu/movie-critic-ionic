import { CommonService } from './../../services/common.service';
import { AuthService } from './../../services/auth.service';
import { IonContent } from '@ionic/angular';
import { MovieService } from './../../services/movie.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  @ViewChild('ionContent') content: IonContent
  page = 1
  searchKeyword = null


  constructor(
    public movieService: MovieService,
    private route: ActivatedRoute,
    public authService: AuthService,
    private router: Router,
    public commonService:CommonService
  ) { }

  scrollTop() {
    this.content.scrollToTop(500)
  }

  ngOnInit() {
    this.movieService.getSpecificCategoryOfMovies('top_rated', 1)
    let page = this.route.snapshot.queryParams.page
    this.movieService.comments = []
    this.movieService.paginateIsFinish = false
  
    if (!page) page = 1
    this.movieService.getAllMovies(page)
  }

  search(e) {
    let searchWord = e ? e.target.value : this.searchKeyword
    if (searchWord) {
      this.router.navigate(['/search'], { queryParams: { search: searchWord, page: 1 }, replaceUrl: true })
      this.movieService.searchMovie(searchWord, 1)
      this.searchKeyword = null
    }
  }
}
