import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../services/authentication.service';
import { AngularFireAuth } from '@angular/fire/auth';

import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder
} from '@angular/forms'
import { MatDialogRef } from '@angular/material/dialog';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  userForm: FormGroup;

  constructor(
    public authService: AuthenticationService,
    private afAuth: AngularFireAuth,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<LoginComponent>
    ) {

  }


  ngOnInit(): void {
    this.userForm = this.fb.group({
      email: new FormControl('', Validators.email),
      password: new FormControl('', Validators.minLength(6))
    });
  }

  
  // closeDialog(){
  //   this.dialogRef.close();
  // }
  // public async LoginGoogle(){
  //   const provider = new auth.GoogleAuthProvider();
  //   const credetial = await this.afAuth.signInWithPopup(provider);
  //   return this.authService.updateUserData(credetial.user)
  //   .then(() => {
  //       this.dialogRef.close();
  //   })
  // }


    onSubmit(value) {
      this.authService.loginWithEmailAndPassWord(value);
    }
  
 

}
