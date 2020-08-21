import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {TrendingComponent} from '../trending.component'
import {TrendingCategoriesComponent} from '../trending-categories/trending-categories.component'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import {DataService} from '../../../services/data.service';
import { Video } from 'src/app/models/video.model';
@Component({
  selector: 'app-video-trending',
  templateUrl: './video-trending.component.html',
  styleUrls: ['./video-trending.component.scss']
})
export class VideoTrendingComponent implements OnInit {

  @Input() dbButton:any=null; listOfVideo:Video;
  isType: boolean;
  

  constructor( private route: ActivatedRoute,public dataService:DataService,
    private router: Router  ) { }

  ngOnInit(): void {}
}

