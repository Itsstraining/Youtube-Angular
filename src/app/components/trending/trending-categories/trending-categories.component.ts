import { Component, OnInit,Input } from '@angular/core';
import {TrendingComponent} from '../trending.component';
import { Router,ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Video } from 'src/app/models/video.model';
import {DataService} from '../../../services/data.service';
@Component({
  selector: 'app-trending-categories',
  templateUrl: './trending-categories.component.html',
  styleUrls: ['./trending-categories.component.scss']
})
export class TrendingCategoriesComponent implements OnInit {
  @Input() dbButton:any=null; DataService

  
  constructor(private _router: Router, private _activatedRoute:ActivatedRoute) { }
  navigateToVideoTrending() {
    this._router.navigate(["/trending", this.dbButton.title]);
  }

  // listOfVideo$:Observable<any>;
  // selectedTitle: String;
  // listOfVideo=videos;

  ngOnInit(): void {
    // this.videos$ = this._activatedRoute.paramMap.pipe(
    //   switchMap(params => {
    //     this.selectedTitle= String(params.get('title'));
    //     return this.DataService.getVideos();
    //   })
    // );
    }
}
