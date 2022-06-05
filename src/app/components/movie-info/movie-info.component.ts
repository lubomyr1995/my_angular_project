import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {IInfo} from "../../interfaces";
import {BehaviorService} from "../../services";

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent implements OnInit {
  isLight: boolean = false;
  info: IInfo;

  constructor(private activatedRoute: ActivatedRoute, private behaviorService: BehaviorService) {
    this.behaviorService.store.subscribe(value => this.isLight = value)
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(value => {
      this.info = value['info']
    })
  }

}
