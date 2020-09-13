import { IonContent } from '@ionic/angular';
import { MovieService } from './../../services/movie.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.page.html',
  styleUrls: ['./upcoming.page.scss'],
})
export class UpcomingPage implements OnInit {

  @ViewChild('ionContentUpcoming') content: IonContent
  
  constructor(
    private route: ActivatedRoute,
    public movieService:MovieService
  ) { }

  ngOnInit() {
    let page = this.route.snapshot.queryParams.page
    this.movieService.getSpecificCategoryOfMovies('upcoming' , page)
  }

  scrollTop() {
    this.content.scrollToTop(1000)
  }


}
