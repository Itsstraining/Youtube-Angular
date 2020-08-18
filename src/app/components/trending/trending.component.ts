import { Component, OnInit } from '@angular/core';
import {} from '../../models/video.model'
@Component({
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.scss']
})
export class TrendingComponent implements OnInit {

  dbButton: Array<any> = [
    {
      icon: 'music_note',
      title: 'Music'
    },
    {
      icon: 'music_note',
      title: 'Game'
    },

    {
      icon: 'music_note',
      title: 'Music'
    },

    {
      icon: 'music_note',
      title: 'Music'
    },


  ]
  constructor() { }

  ngOnInit(): void {
  }

}
