import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../services/authentication.service';
import { MatDialog } from '@angular/material/dialog';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder
} from '@angular/forms'
import { AngularFireAuth } from '@angular/fire/auth';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userForm: FormGroup;

  constructor(public authService: AuthenticationService,
    private afAuth: AngularFireAuth,
    // private dialogRef: MatDialog<LoginComponent>,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      email: new FormControl('', Validators.email),
      password: new FormControl('', Validators.minLength(6))
    });
  }

}
