import {Component, Input, OnInit} from '@angular/core';

import {IGenre, IMovie} from "../../interfaces";
import {BehaviorService} from "../../services";

interface IG {
  id?: number;
  name?: string
}

@Component({
  selector: 'app-movies-list-card',
  templateUrl: './movies-list-card.component.html',
  styleUrls: ['./movies-list-card.component.css']
})
export class MoviesListCardComponent implements OnInit {
  isLight: boolean = false;
  @Input()
  movie: IMovie;
  @Input()
  genres: IGenre[];
  marker: IG[];

  constructor(private behaviorService: BehaviorService) {
    this.behaviorService.store.subscribe(value => this.isLight = value)
  }

  ngOnInit(): void {
    // @ts-ignore
    this.marker = this.movie.genre_ids?.map(genreId => this.genres?.find(el => el.id === genreId))
  }

}
