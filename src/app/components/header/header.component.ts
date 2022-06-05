import {Component, OnInit} from '@angular/core';
import {MatSlideToggleChange} from "@angular/material/slide-toggle";

import {BehaviorService} from "../../services";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLight: boolean = false;

  constructor(private behaviorService: BehaviorService) {

  }

  ngOnInit(): void {

  }

  onLightSwitch({checked}: MatSlideToggleChange) {
    this.isLight = checked
    this.behaviorService.store.next(checked)
  }
}
