import { Component, OnInit } from "@angular/core";

@Component({
  selector: "fds-sign-up",
  template: `
	<form class="col-9 p-mid mx-auto">
	  <div class="row mb-small">
		<div class="formGroup col-6">
		  <label for="FirstNamee" class="required">First Name</label>
		  <div class="formControlWrap d-flex align-items-center flex-wrap">
			<div class="formControlHolder d-flex">
			  <input type="text" class="formControl" id="FirstNamee" placeholder="">
			</div>
		  </div>
		</div>
		<div class="formGroup col-6">
		  <label for="lastName" class="required">Last Name</label>
		  <div class="formControlWrap d-flex align-items-center flex-wrap">
			<div class="formControlHolder d-flex">
			  <input type="text" class="formControl formControl--curved" placeholder="" id="lastName">
			</div>
		  </div>
		</div>
	  </div>

	  <div class="row mb-small">
		<div class="formGroup col-12">
		  <label for="Email" class="required">Email</label>
		  <div class="formControlWrap d-flex align-items-center flex-wrap">
			<div class="formControlHolder d-flex">
			  <input type="email" class="formControl" id="Email" placeholder="" required="">
			</div>
		  </div>
		</div>
	  </div>

	  <div class="row mb-small">
		<div class="formGroup col-12">
      <label for="pass" class="required">Password</label><i class="icon-info-outline"></i>
		  <div class="formControlWrap d-flex align-items-center flex-wrap">
			<div class="formControlHolder d-flex">
			  <input type="password" class="formControl" id="pass" placeholder="" required="">
			</div>
		  </div>
		</div>
	  <div class="formGroup col-12">
		<label for="pass" class="required">Confirm Password</label>
		<div class="formControlWrap d-flex align-items-center flex-wrap">
		  <div class="formControlHolder d-flex">
			<input type="password" class="formControl" id="pass" placeholder="" required="">
		  </div>
		</div>
	  </div>
	  </div>

<!--	  <div class="row mb-small">-->
		<!--simple select-->
<!--		<div class="formGroup col-12 mr-mid">-->
<!--		  <label for="gender">Gender</label>-->
<!--		  <div class="formControlWrap d-flex align-items-center flex-wrap">-->
<!--			<div class="formControlHolder formControlHolder__select">-->
<!--			  <select class="formControl" name="course" id="gender" required="">-->
<!--				<option value="">Your Gender</option>-->
<!--				<option>Male</option>-->
<!--				<option>Female</option>-->
<!--				<option>Other</option>-->
<!--			  </select>-->
<!--			  <button type="button" class="icon-clear clearCrossBtn" aria-label="Label"></button>-->
<!--			  <button type="button" class="icon-today eventBtn" aria-label="Label"></button>-->
<!--			</div>-->
<!--			<span class="hide pl-tiny icon-info errorOptionx"></span>-->
<!--			<span class="hide text-danger">Please Select any option</span>-->
<!--		  </div>-->
<!--		</div>-->
		<!--/Simple Select-->
<!--	  </div>-->

	  <div class="row">
		<div class="col-12 d-flex justify-content-center">
		  <fds-button className="btn__primary expand-lg-up" style="width:100%; display:block;">Sign up</fds-button>
		</div>
	  </div>
	</form>


  `,
  styleUrls: []
})
export class SignUpComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
