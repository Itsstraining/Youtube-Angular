import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(public authService: AuthenticationService,
    private dialog:MatDialog) { }

  ngOnInit(): void {
  }
  openDialog() {
    this.dialog.open(LoginComponent, {
      width: '500px',
      height: '500px'
    });
  
  };
}
