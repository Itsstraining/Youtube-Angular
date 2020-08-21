import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../app/services/data.service';



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
    {text: 'Two', cols: 1, rows: 10, color: 'lightgreen'},
  
  ];
  

  
  constructor(public dataService:DataService) { }


  ngOnInit(): void {
  }

}
