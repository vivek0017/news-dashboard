import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LocalApiService } from '../local-api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  value = { email: '', password: '' };
  angForm: FormGroup;
  ngOnInit() {

  }
  constructor(private fb: FormBuilder, private localService: LocalApiService, private toastr: ToastrService) {
    this.createForm();
  }
  createForm() {
    this.angForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    {
      this.value.email = this.angForm.get('email').value;
      this.value.password = this.angForm.get('password').value;
      this.localService.doRegister(this.value)
        .then(res => {
          console.log(res);
          if (res) {
            this.successmsg('Email has been registered successfully');
          }
          // this.resetForm();
        }, err => {
          if (err && err.message) {
            this.errorsmsg(err.message);
          }
          console.error(err);
        });
    }
  }

  resetForm() {
    this.angForm.setValue['email'].value = '';
    this.angForm.setValue['[password]'].value = '';
  }

  successmsg(message) {
    this.toastr.success(message, 'Success', { positionClass: 'toast-bottom-right' });
  }
  errorsmsg(message) {
    this.toastr.error(message, 'Error', { positionClass: 'toast-bottom-right' });

  }
  infotoastr() {
    this.toastr.info('Important News', 'Information');
  }
  toastrwaring() {
    this.toastr.warning('Battery about to Die', 'Warning');
  }

}
