import { PaginationComponent } from './../../components/pagination/pagination.component';
import { ScrollViewHorizontalComponent } from './../../components/scroll-view-horizontal/scroll-view-horizontal.component';
import { HeaderComponent } from './../../components/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { MovieListComponent } from 'src/app/components/movie-list/movie-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [
    HomePage,
    HeaderComponent,
    ScrollViewHorizontalComponent,
    PaginationComponent,
    MovieListComponent,
  ]
})
export class HomePageModule { }
