import { Component, OnInit } from '@angular/core';

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


  ]
  constructor() { }

  ngOnInit(): void {
  }

}
