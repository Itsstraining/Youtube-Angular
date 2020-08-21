import { Component, OnInit, Output } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';
import { EventEmitter } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
// import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {


  constructor(public authService: AuthenticationService,
    private dialog:MatDialog,
    public afAuth: AngularFireAuth,
    public router: Router) { }

  ngOnInit(): void {
    
  }
  openDialog() {
    this.dialog.open(LoginComponent, {
      width: '500px',
      height: '500px'
    });
  };



  @Output() changeState = new EventEmitter<boolean>();
  isLogin: boolean;
  opened: boolean;
  userDetails = null;
  user: Array<any> = [];

  changeEvent() {
    this.changeState.emit(!this.opened);
    this.opened = !this.opened;
  }
  
}
