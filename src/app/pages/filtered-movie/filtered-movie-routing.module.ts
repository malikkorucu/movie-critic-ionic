import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilteredMoviePage } from './filtered-movie.page';

const routes: Routes = [
  {
    path: '',
    component: FilteredMoviePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilteredMoviePageRoutingModule {}
