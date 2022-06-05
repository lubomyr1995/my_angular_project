import {Injectable} from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {MovieService} from "./movie.service";
import {IInfo} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class InfoResolver implements Resolve<IInfo> {

  constructor(private movieService: MovieService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IInfo> {
    return this.movieService.getMovieDetailsById(route.params['id'])
  }

}
