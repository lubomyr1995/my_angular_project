import {Component, Input, OnInit} from '@angular/core';

import {IImage} from "../../interfaces";

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})

export class ImageComponent implements OnInit {
  @Input()
  images: IImage;

  constructor() {

  }

  ngOnInit(): void {
  }

}
