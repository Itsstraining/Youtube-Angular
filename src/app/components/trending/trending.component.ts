import { Component, OnInit, Input } from '@angular/core';
import {DataService} from '../../services/data.service'
import { Video } from 'src/app/models/video.model';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators'; 

@Component({
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.scss']
})
export class TrendingComponent implements OnInit {
 @Input() 
  dbButton: Array<any> = [
    {
      icon: 'music_note',
      title: 'Music'
    },
    {
      icon: 'sports_esports',
      title: 'Game'
    },

    {
      icon: 'fiber_new',
      title: 'News'
    },

    {
      icon: 'movie',
      title: 'Movies'
    },


  ]; 
 
  
  

  constructor(public video:DataService) { }


  ngOnInit(): void {



  }

}
