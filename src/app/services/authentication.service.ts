import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as firebase from 'firebase';

import { User } from '../models/user.model'
import { LoginComponent } from '../components/nav-bar/login/login.component';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  user: firebase.User;

  // public isLoading :boolean;

  constructor(
    private auth: AngularFireAuth,
    private db: AngularFirestore,
    public dialogRef: MatDialog
  ) { }
  public async login() {
    try {

      let provider = new firebase.auth.GoogleAuthProvider();
      await this.auth.signInWithPopup(provider);
      this.user = await this.auth.currentUser;
      return this.auth.currentUser
        .then(() => {

          this.dialogRef.closeAll();
          this.user != null;
        })

    }
    catch (err) {
      console.log(err);
    }

  }

  public async signout() {
    await this.auth.signOut();
    this.user = null;
  }


  // updateUserData({ uid, email, displayName, photoURL }: User) {
  //   const userRef: AngularFirestoreDocument<User> = this.db.doc(`users/${uid}`);
  //   const data = {
  //     uid,
  //     email,
  //     displayName,
  //     photoURL
  //   };
  //   return userRef.set(data, { merge: true });
  // }


}
