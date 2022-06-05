import {Component, OnInit} from '@angular/core';

import {BehaviorService} from "../../services";

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {
  isLight: boolean = false;

  constructor(private behaviorService: BehaviorService) {
    this.behaviorService.store.subscribe(value => this.isLight = value)
  }

  ngOnInit(): void {
  }

}
