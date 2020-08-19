import { Component, OnInit,Input } from '@angular/core';
import {TrendingComponent} from '../trending.component';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-trending-categories',
  templateUrl: './trending-categories.component.html',
  styleUrls: ['./trending-categories.component.scss']
})
export class TrendingCategoriesComponent implements OnInit {
  @Input() dbButton:any=null;
  
  constructor(private _router: Router, private _activatedRoute:ActivatedRoute) { }
  navigateToVideoTrending() {
    this._router.navigate(["/trending", this.dbButton.title]);
  }
  ngOnInit(): void {
  }

}
