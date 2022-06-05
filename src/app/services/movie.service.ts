import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {IGenreResponse, IInfo, IServerResponse} from "../interfaces";
import {urls} from "../constants";
import {PaginatorService} from "./paginator.service";

@Injectable({
  providedIn: 'root'
})

export class MovieService {

  constructor(private httpClient: HttpClient, private paginatorService: PaginatorService) {
  }

  getAll(page: number, genre: number): Observable<IServerResponse> {
    return this.httpClient.get<IServerResponse>(`${urls.movies}?page=${page}` + (genre > 0 ? `&with_genres=${genre}` : ''))
  }

  getGenres(): Observable<IGenreResponse> {
    return this.httpClient.get<IGenreResponse>(urls.genres)
  }

  getMovieDetailsById(movieId: number): Observable<IInfo> {
    return this.httpClient.get<IInfo>(`${urls.movie}/${movieId}?append_to_response=videos,images`)
  }
}
