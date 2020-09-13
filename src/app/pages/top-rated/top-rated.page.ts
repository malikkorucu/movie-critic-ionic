import { IonContent } from '@ionic/angular';
import { MovieService } from './../../services/movie.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.page.html',
  styleUrls: ['./top-rated.page.scss'],
})
export class TopRatedPage implements OnInit {

  @ViewChild('a') content: IonContent
  
  constructor(
    public movieService:MovieService
  ) { }

  ngOnInit() {
    this.movieService.getSpecificCategoryOfMovies('top_rated' , 1)
  }

  scrollTop() { 
    this.content.scrollToTop(1000)
  }
}
