import { MovieListComponent } from './../../components/movie-list/movie-list.component';
import { PaginationComponent } from './../../components/pagination/pagination.component';
import { HeaderComponent } from './../../components/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilteredMoviePageRoutingModule } from './filtered-movie-routing.module';

import { FilteredMoviePage } from './filtered-movie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FilteredMoviePageRoutingModule
  ],
  declarations: [FilteredMoviePage, HeaderComponent, PaginationComponent , MovieListComponent]
})
export class FilteredMoviePageModule { }
