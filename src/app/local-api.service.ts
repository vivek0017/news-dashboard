import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';


@Injectable({
  providedIn: 'root'
})

export class LocalApiService {
  constructor(private httpClient: HttpClient, private afAuth: AngularFireAuth) { }
  configUrl = 'assets/config.json';

  getConfig() {
    return this.httpClient.get(this.configUrl, this.getHeader());
  }
  getHeader() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
      })
    };

    return httpOptions;
  }

  login() {
    console.log('Redirecting...');
    this.afAuth.auth.signInWithRedirect(new auth.GoogleAuthProvider);
  }

  logout() {
    console.log('Signing out...');
    this.afAuth.auth.signOut();
  }

  consumeResponse() {
    return this.afAuth.authState
      .subscribe(user => {
        console.log(user);
      });
  }

  doGoogleLogin() {
    return new Promise<any>((resolve, reject) => {
      const provider = new auth.GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');
      this.afAuth.auth
        .signInWithPopup(provider)
        .then(res => {
          resolve(res);
        });
    });
  }

  doRegister(value) {
    return new Promise<any>((resolve, reject) => {
      auth().createUserWithEmailAndPassword(value.email, value.password)
        .then(res => {
          resolve(res);
        }, err => reject(err));
    });
  }
}
