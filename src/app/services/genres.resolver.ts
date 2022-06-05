import {Injectable} from '@angular/core';

import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {IGenreResponse} from "../interfaces";
import {MovieService} from "./movie.service";

@Injectable({
  providedIn: 'root'
})
export class GenresResolver implements Resolve<IGenreResponse> {
  constructor(private movieService: MovieService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IGenreResponse> | Promise<IGenreResponse> | IGenreResponse {
    return this.movieService.getGenres();
  }

}
