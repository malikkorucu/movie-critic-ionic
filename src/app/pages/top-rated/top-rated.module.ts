import { PaginationComponent } from './../../components/pagination/pagination.component';
import { HeaderComponent } from './../../components/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TopRatedPageRoutingModule } from './top-rated-routing.module';

import { TopRatedPage } from './top-rated.page';
import { MovieListComponent } from 'src/app/components/movie-list/movie-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TopRatedPageRoutingModule
  ],
  declarations: [TopRatedPage , HeaderComponent , MovieListComponent , PaginationComponent]
})
export class TopRatedPageModule {}
