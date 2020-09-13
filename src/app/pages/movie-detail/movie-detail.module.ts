import { CommentComponent } from './../../components/comment/comment.component';
import { RatingModule } from 'ng-starrating';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HeaderComponent } from './../../components/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MovieDetailPageRoutingModule } from './movie-detail-routing.module';

import { MovieDetailPage } from './movie-detail.page';
import {IonicRatingModule} from 'ionic-rating'
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MovieDetailPageRoutingModule,
    NgCircleProgressModule.forRoot(),
    RatingModule,
    IonicRatingModule
  ],
  declarations: [MovieDetailPage , HeaderComponent , CommentComponent]
})
export class MovieDetailPageModule {}
