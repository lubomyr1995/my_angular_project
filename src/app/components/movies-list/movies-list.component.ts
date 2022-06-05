import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PageEvent} from "@angular/material/paginator";

import {IGenre, IMovie} from "../../interfaces";
import {BehaviorService, MovieService, PaginatorService} from "../../services";

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  isLight: boolean = false;
  movies: IMovie[];
  genres: IGenre[];
  total_pages: number;
  page: number;

  constructor(private movieService: MovieService, private activatedRoute: ActivatedRoute, private behaviorService: BehaviorService, private paginatorService: PaginatorService) {
    this.behaviorService.store.subscribe(value => this.isLight = value)
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(value => {
      this.genres = value['allGenres'].genres
    })

    this.activatedRoute.params.subscribe(({genreId}) => {
      this.paginatorService.store.subscribe(value => {
        this.movieService.getAll(value, genreId).subscribe(value => {
          this.movies = value.results
          this.total_pages = value.total_pages
        })
      })
    })

  }

  onPageChange(event: PageEvent) {
    this.paginatorService.store.next(event.pageIndex + 1)
  }
}
