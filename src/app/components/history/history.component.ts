import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../app/services/data.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit {
  tiles: Tile[] = [
    {text: 'Two', cols: 1, rows: 2 , color: 'lightgreen'},
  
  ];
  

  
  constructor(public video:DataService,public sanitizer: DomSanitizer) { }
  


  ngOnInit(): void {
  }

}
