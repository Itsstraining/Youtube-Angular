import { Component, OnInit , Input } from '@angular/core';
import {DataService} from '../../services/data.service';
import {Video} from '../../models/video.model'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  constructor(public dataService:DataService) { }
  ngOnInit(): void {
    // throw new Error("Method not implemented.");
  }


}
