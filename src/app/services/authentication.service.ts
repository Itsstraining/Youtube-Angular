import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  user: firebase.User;
  
  constructor(private auth: AngularFireAuth) { }
  public async login(){
    try { 

    let provider = new firebase.auth.GoogleAuthProvider();  
    await this.auth.signInWithPopup(provider);
    this.user = await this.auth.currentUser;
    }
      catch (err) {
        console.log(err);
      }
 
  }  

  public async signout(){
    await this.auth.signOut();
    this.user = null ;
  }
}
