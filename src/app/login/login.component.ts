import { Component, OnInit } from '@angular/core';
import { LocalApiService } from '../local-api.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LocalApiService, private router: Router) { }

  ngOnInit() {
  }

  LoginGoogle() {
    console.log('login...');
    this.loginService.doGoogleLogin()
      .then(response => {
        console.log(response);
        this.router.navigate(['/home']);
      }, err => {
        console.error(err);
      });
  }

  LogoutGoogle() {
    this.loginService.logout();
    console.log('Signout completed successfully...');
  }

}
