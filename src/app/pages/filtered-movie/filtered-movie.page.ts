import { MovieService } from './../../services/movie.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filtered-movie',
  templateUrl: './filtered-movie.page.html',
  styleUrls: ['./filtered-movie.page.scss'],
})
export class FilteredMoviePage implements OnInit {

  categoryName: string = ""

  constructor(
    private route: ActivatedRoute,
    public movieService:MovieService
  ) { }

  ngOnInit() {
    let genreId = this.route.snapshot.params.id
    let page = this.route.snapshot.queryParams.page
    this.movieService.getMovieByGenre(genreId,page)
    this.categoryName = this.route.snapshot.queryParams.category
  }

}
