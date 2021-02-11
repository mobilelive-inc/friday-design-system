import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'fds-demo-toast-notifications',
  template: `
    <p>toast-notifications works!</p>
    <button (click)="showSuccess()">Toast message</button>
  `,
  styles: []
})
export class ToastNotificationsComponent implements OnInit {
  constructor(private toastr: ToastrService) {}

  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!', {
      timeOut: 1000000,
      extendedTimeOut: 100000,
      toastClass: 'toast-notification',
      titleClass: 'toastTitle',
      messageClass: 'toastMessage'
    });
  }

  ngOnInit(): void {}
}
