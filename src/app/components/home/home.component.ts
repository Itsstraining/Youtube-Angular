import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 items: any

  constructor(public dataService:DataService) { }

  ngOnInit() {
    this.items = this.dataService.getItems();
  }
}
