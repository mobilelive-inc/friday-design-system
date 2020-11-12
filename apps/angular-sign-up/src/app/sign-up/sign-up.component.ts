import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "fds-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: []
})
export class SignUpComponent implements OnInit {
  form = new FormGroup({
    firstName: new FormControl("", Validators.required),
    lastName: new FormControl("", Validators.required),
    email: new FormControl("", [Validators.required, Validators.email]),
    hobby: new FormControl(""),
    password: new FormControl("", Validators.required),
    passwordConfirm: new FormControl("", Validators.required)
  });

  isLoading = false;

  constructor(private router: Router) {
  }

  get submitButtonTitle() {
    return this.isLoading ? "Please wait" : "Sign up";
  }

  getControl(name) {
    return this.form.get(name);
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.warn(this.form.value);
    this.isLoading = true;
    setTimeout(() => {
      this.router.navigate(["success"]);
    }, 1000);
  }

  passwordsAreEqual() {
    return this.getControl("passwordConfirm").value === this.getControl("password").value;
  }

  isSubmitEnable() {
    return this.passwordsAreEqual() && this.form.valid;
  }
}
