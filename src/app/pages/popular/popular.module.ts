import { PaginationComponent } from './../../components/pagination/pagination.component';
import { HeaderComponent } from './../../components/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopularPageRoutingModule } from './popular-routing.module';

import { PopularPage } from './popular.page';
import { MovieListComponent } from 'src/app/components/movie-list/movie-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PopularPageRoutingModule
  ],
  declarations: [PopularPage,HeaderComponent,PaginationComponent ,MovieListComponent]
})
export class PopularPageModule {}
