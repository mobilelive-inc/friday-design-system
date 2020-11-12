import { CdkStepperNext, CdkStepperPrevious } from "@angular/cdk/stepper";
import { Directive } from "@angular/core";
import { CdkStepper } from "@angular/cdk/stepper";
import { markFormGroupTouched } from "../shared/forms";
import { FormGroup } from "@angular/forms";

/** Button that moves to the next step in a stepper workflow. */
@Directive({
  selector: "button[fdsStepperNext]",
  host: {
    "[type]": "type"
  },
  inputs: ["type"]
})
export class FdsStepperNext extends CdkStepperNext {
  _stepper: CdkStepper;

  constructor(_stepper: CdkStepper) {
    super(_stepper);
  }

  /**
   * Extend default cdkStepper with additional functionality:
   * When user clicks Next button and [stepControl] (FormControl) is invalid
   * Mark all fields as touched to show errors.
   */
  _handleClick() {
    const steps = this._stepper.steps.toArray();
    const index = this._stepper.selectedIndex;
    if(steps[index] && steps[index].stepControl.invalid) {
      markFormGroupTouched(steps[index].stepControl as FormGroup);
    }
    super._handleClick();
  }
}

/** Button that moves to the previous step in a stepper workflow. */
@Directive({
  selector: "button[fdsStepperPrevious]",
  host: {
    "[type]": "type"
  },
  inputs: ["type"]
})
export class FdsStepperPrevious extends CdkStepperPrevious {
}
