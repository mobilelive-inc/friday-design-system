import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "demo-stepper-basic",
  template: `
	<fds-horizontal-stepper [linear]="true" #stepper>

	  <ng-template let-stepperHeader fdsTemplate="header">
		<fds-progress [min]="0" [max]="stepperHeader.stepsCount"
					  [displayWith]="labelFormatFn(stepperHeader.stepsCount)"
					  [value]="stepperHeader.selectedIndex+1" [showLabel]="true"
		></fds-progress>
		<br>
		<div class="text--center">
		  Question {{stepperHeader.selectedIndex + 1}} of {{stepperHeader.stepsCount}}
		</div>
		<br>
	  </ng-template>

	  <fds-step [stepControl]="firstFormGroup">
		<form [formGroup]="firstFormGroup" class="w-25 m-auto">
		  <div class="formGroup">
			<fds-form-field [clearBtn]="true">
			  <fds-label>Name</fds-label>
			  <input type="text" fdsInput [required]="true" formControlName="firstCtrl" placeholder="Last name, First name"/>
			  <fds-error *ngIf="firstFormGroup.get('firstCtrl')?.hasError('required')">Name is required</fds-error>
			</fds-form-field>
		  </div>
		  <div class="text--center">
			<button class="clear btn btn__primary" fdsStepperNext>Next</button>
		  </div>
		</form>
	  </fds-step>

	  <fds-step [stepControl]="secondFormGroup">
		<form [formGroup]="secondFormGroup" class="w-25 m-auto">
		  <div class="formGroup">
			<fds-form-field [clearBtn]="true">
			  <fds-label>Address</fds-label>
			  <input type="text" fdsInput [required]="true" formControlName="secondCtrl" placeholder="Ex. 1 Main St, New York, NY"/>
			  <fds-error *ngIf="secondFormGroup.get('secondCtrl')?.hasError('required')">Address is required</fds-error>
			</fds-form-field>
		  </div>

		  <div class="text--center">
			<button class="clear btn btn__secondary" fdsStepperPrevious>Back</button>
			<button class="clear btn btn__primary" fdsStepperNext>Next</button>
		  </div>
		</form>
	  </fds-step>

	  <fds-step>
		<div class="w-50 m-auto">
		  <br>
		  <p class="text--center h3">You are now done.</p>
		  <br>
		  <div class="text--center">
			<button class="clear btn btn__secondary" fdsStepperPrevious>Back</button>
			<button class="clear btn btn__primary" (click)="stepper.reset()">Reset</button>
		  </div>
		</div>
	  </fds-step>
	</fds-horizontal-stepper>

  `,
  styles: []
})
export class StepperBasicComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isEditable = false;

  constructor(private _formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ["", Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ["", Validators.required]
    });
  }

  labelFormatFn(max) {
    return (value) => `(${value} of ${max})`;
  }
}
