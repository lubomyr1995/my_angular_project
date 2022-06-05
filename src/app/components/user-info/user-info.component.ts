import { Component, OnInit } from '@angular/core';

import {BehaviorService} from "../../services";

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  isLight: boolean = false;

  constructor(private behaviorService: BehaviorService) {
    this.behaviorService.store.subscribe(value => this.isLight = value)
  }

  ngOnInit(): void {
  }

}
