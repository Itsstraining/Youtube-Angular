import { Component, OnInit } from '@angular/core';

import { DataService } from '../../../../app/services/data.service';

@Component({
  selector: 'app-librarylogin',
  templateUrl: './librarylogin.component.html',
  styleUrls: ['./librarylogin.component.scss']
})
export class LibraryloginComponent implements OnInit {

  constructor(public dataService:DataService) { }

  ngOnInit(): void {
  }

}
