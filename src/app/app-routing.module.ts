import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'intro',
    pathMatch: 'full'
  },

  {
    path: 'intro',
    loadChildren: () => import('./pages/intro/intro.module').then(m => m.IntroPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'categories',
    loadChildren: () => import('./pages/categories/categories.module').then(m => m.CategoriesPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'filtered-movie/:id',
    loadChildren: () => import('./pages/filtered-movie/filtered-movie.module').then(m => m.FilteredMoviePageModule)
  },
  {
    path: 'top-rated',
    loadChildren: () => import('./pages/top-rated/top-rated.module').then( m => m.TopRatedPageModule)
  },
  {
    path: 'upcoming',
    loadChildren: () => import('./pages/upcoming/upcoming.module').then( m => m.UpcomingPageModule)
  },
  {
    path: 'popular',
    loadChildren: () => import('./pages/popular/popular.module').then( m => m.PopularPageModule)
  },
  {
    path: 'movie-detail/:movieId',
    loadChildren: () => import('./pages/movie-detail/movie-detail.module').then( m => m.MovieDetailPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./pages/search/search.module').then( m => m.SearchPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
