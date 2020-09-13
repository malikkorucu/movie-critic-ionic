import { MovieService } from './../../services/movie.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {

  constructor(
    public movieService: MovieService,
    private router:Router
  ) { }

  ngOnInit() {}

  filterMovie(genreId) { 
    // this.movieService.currentGenreId = genreId
    // this.movieService.getMovieByGenre()
    // this.router.navigate(['/filtered-movie'], {replaceUrl:true})
  }

}
