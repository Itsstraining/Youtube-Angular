import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../app/services/data.service';

@Component({
  templateUrl: './subcriptions.component.html',
  styleUrls: ['./subcriptions.component.scss']
})
export class SubcriptionsComponent implements OnInit {

  constructor(public dataService:DataService) { }

  ngOnInit(): void {
  }

}
