import { AuthService } from './../../services/auth.service';
import { IonContent } from '@ionic/angular';
import { PaginationComponent } from './../../components/pagination/pagination.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
 
export class SearchPage implements OnInit {

  @ViewChild('searchContent') content: IonContent
  searchWord: string = null

  constructor(
    public route: ActivatedRoute,
    public movieService: MovieService,
    private location: Location,
    private router: Router,
    public pagination: PaginationComponent,
    private authService:AuthService
  ) { }

  ngOnInit() {
    const page = this.route.snapshot.queryParams.page
    const searchWord = this.route.snapshot.queryParams.search

    this.movieService.searchMovie(searchWord, page)
  }
  
  ngAfterViewInit(): void {
    this.content.scrollToTop(500)
  }

  goHome() {
    this.movieService.getAllMovies(1)
  }

  search(e) { 
    let searchKeyword = e ? e.target.value : this.searchWord
    console.log(searchKeyword)
    this.movieService.searchMovie(searchKeyword , 1)
    this.router.navigate(['/search'], { queryParams: { search: searchKeyword, page: 1 }, replaceUrl: true })
  }
}
