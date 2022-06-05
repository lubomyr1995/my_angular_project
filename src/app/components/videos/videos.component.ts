import {Component, Input, OnInit} from '@angular/core';

import {IVideo} from "../../interfaces";

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
  isLight: boolean = false;
  @Input()
  videos: IVideo;

  constructor() {
  }

  ngOnInit(): void {
  }

}
