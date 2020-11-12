import { Component, OnInit } from "@angular/core";

@Component({
  selector: "fds-success-page",
  template: `
	<br>
	<h1 class="text--center">Account is successfully created</h1>
	<div class="text--center">
	  <span class="icon-check-circle" style="color: green;margin-right: 10px;font-size: 150px;"></span>
	</div>
	<p class="ml-large mb-large mr-large mt-small">Please check the email and navigate with the confirmation link.
	  If you don't receive an email, please check the spam folder.</p>
	<div class="text--center">
	  <a class="btn btn__primary" routerLink="/">Back to Home page</a>
	</div>`,
  styleUrls: []
})
export class SuccessPageComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
