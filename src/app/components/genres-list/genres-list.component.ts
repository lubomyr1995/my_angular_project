import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {IGenre} from "../../interfaces";
import {BehaviorService, MovieService} from "../../services";

@Component({
  selector: 'app-genres-list',
  templateUrl: './genres-list.component.html',
  styleUrls: ['./genres-list.component.css']
})
export class GenresListComponent implements OnInit {
  isLight: boolean = false;
  genres: IGenre[];

  constructor(private movieService: MovieService, private behaviorService: BehaviorService, private activatedRoute: ActivatedRoute) {
    this.behaviorService.store.subscribe(value => this.isLight = value)
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(value => {
      this.genres = value['allGenres'].genres
    })
  }

}
