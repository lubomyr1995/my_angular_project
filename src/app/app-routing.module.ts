import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {MainLayoutComponent} from "./layouts/main-layout/main-layout.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {GenresResolver, InfoResolver} from "./services";
import {MoviesListComponent} from "./components/movies-list/movies-list.component";
import {UserInfoComponent} from "./components/user-info/user-info.component";
import {GenresListComponent} from "./components/genres-list/genres-list.component";
import {MovieInfoComponent} from "./components/movie-info/movie-info.component";

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: 'movies', pathMatch: 'full'},
      {path: 'movies', resolve: {allGenres: GenresResolver}, component: MoviesListComponent},
      {
        path: 'genres', resolve: {allGenres: GenresResolver}, component: GenresListComponent, children: [
          {path: '', redirectTo: '28', pathMatch: 'full'},
          {path: ':genreId', resolve: {allGenres: GenresResolver}, component: MoviesListComponent}
        ]
      },
      {path: 'info/:id', resolve: {info: InfoResolver}, component: MovieInfoComponent},
      {path: 'userInfo', component: UserInfoComponent},
      {path: '**', component: NotFoundComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
