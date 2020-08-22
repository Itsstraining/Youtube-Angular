import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../../app/services/data.service';
@Component({
  selector: 'app-subcriptionslogin',
  templateUrl: './subcriptionslogin.component.html',
  styleUrls: ['./subcriptionslogin.component.scss']
})
export class SubcriptionsloginComponent implements OnInit {

  constructor(public dataService:DataService) { }

  ngOnInit(): void {
  }

}
