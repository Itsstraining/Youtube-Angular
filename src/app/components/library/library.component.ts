import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../../app/services/data.service';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../nav-bar/login/login.component';
import { AuthenticationService } from '../../services/authentication.service'
@Component({
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {

  constructor(public dataService:DataService,private dialog:MatDialog,
    public router: Router,
    public authService: AuthenticationService) { }

  ngOnInit(): void {
  }
  openDialog() {
    this.dialog.open(LoginComponent, {
      width: '500px',
      height: '500px'
    });
}
}
