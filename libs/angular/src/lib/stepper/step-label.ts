import { Directive } from '@angular/core';
import { CdkStepLabel } from '@angular/cdk/stepper';

@Directive({
  selector: '[fdsStepLabel]'
})
export class FdsStepLabel extends CdkStepLabel {}
