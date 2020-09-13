import { CommonService } from './../../services/common.service';
import { IonContent } from '@ionic/angular';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.page.html',
  styleUrls: ['./popular.page.scss'],
})
export class PopularPage implements OnInit {

  @ViewChild('ionContentPopular') content: IonContent
  constructor(
    private route: ActivatedRoute,
    public movieService: MovieService,
    public commonService:CommonService
  ) { }

  ngOnInit() {
    let page = this.route.snapshot.queryParams.page
    this.movieService.getSpecificCategoryOfMovies('popular' , page)
  }

  scrollTop() {
    this.content.scrollToTop(1000)
   }

}
