import { Component, OnInit } from '@angular/core';
import {Trending} from '../../../models/video.model'
@Component({
  selector: 'app-trending-categories',
  templateUrl: './trending-categories.component.html',
  styleUrls: ['./trending-categories.component.scss']
})
export class TrendingCategoriesComponent implements OnInit {

  db: Array<Trending> = [
    new Trending ("Music"),
    new Trending ("Game"),
    new Trending ("News"),
    new Trending ("Movies"),
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
