import { Component, OnInit,Input } from '@angular/core';
import {TrendingComponent} from '../trending.component';
@Component({
  selector: 'app-trending-categories',
  templateUrl: './trending-categories.component.html',
  styleUrls: ['./trending-categories.component.scss']
})
export class TrendingCategoriesComponent implements OnInit {
  @Input() dbButton:any=null;
  

  constructor() { }

  ngOnInit(): void {
  }

}
