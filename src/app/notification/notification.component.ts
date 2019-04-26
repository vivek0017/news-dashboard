import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  constructor(private toastr: ToastrService) { }

  ngOnInit() {
  }
  successmsg(message) {
    this.toastr.success(message, 'Success');
  }
  errorsmsg(message) {
    this.toastr.error(message, 'Error');

  }
  infotoastr() {
    this.toastr.info('Important News', 'Information');
  }
  toastrwaring() {
    this.toastr.warning('Battery about to Die', 'Warning');
  }
}
