import { HeaderComponent } from './../../components/header/header.component';
import { MovieListComponent } from './../../components/movie-list/movie-list.component';
import { PaginationComponent } from './../../components/pagination/pagination.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchPageRoutingModule } from './search-routing.module';

import { SearchPage } from './search.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchPageRoutingModule
  ],
  declarations: [SearchPage, PaginationComponent, MovieListComponent,HeaderComponent],
  providers:[PaginationComponent]
})
export class SearchPageModule {}
