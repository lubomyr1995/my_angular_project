import {Component, Input, OnInit} from '@angular/core';

import {IGenre} from "../../interfaces";
import {BehaviorService} from "../../services";

@Component({
  selector: 'app-genre-badge',
  templateUrl: './genre-badge.component.html',
  styleUrls: ['./genre-badge.component.css']
})
export class GenreBadgeComponent implements OnInit {
  isLight: boolean = false;
  @Input()
  genre: IGenre;

  constructor(private behaviorService: BehaviorService) {
    this.behaviorService.store.subscribe(value => this.isLight = value)
  }

  ngOnInit(): void {
  }

}
