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

// @Input() DataService

 

// video$:Observable<any>;

  constructor( private route: ActivatedRoute,
    private router: Router  ) { }

  ngOnInit(): void {}
  //   const videoTitle= this.route.snapshot.paramMap.get('title');
  //   this.video$ = this.DataService.getVideo(videoTitle);
  // }
  // gotoVideo(video: Video) {
  //   const videoTitle = video ? video.title : null;
  //   // Pass along the hero id if available
  //   // so that the HeroList component can select that item.
  //   this.router.navigate(['/video', { title: videoTitle }]);
  // }
}
