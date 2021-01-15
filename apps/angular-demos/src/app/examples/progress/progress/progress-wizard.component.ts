import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo-progress',
  template: `
    <fds-progress
      [min]="minValue"
      [max]="maxValue"
      [value]="value"
      [showLabel]="true"
      [displayWith]="labelFormatFn"
    ></fds-progress>
    <div class="text--center pt--6">
      <a
        class="btn btn--secondary mr--3"
        href="javascript:void(0)"
        (click)="prev()"
        >Prev</a
      >
      <a class="btn btn--primary" href="javascript:void(0)" (click)="next()"
        >Next</a
      >
    </div>
  `,
  styles: []
})
export class ProgressWizardComponent implements OnInit {
  value = 2;

  minValue = 0;

  maxValue = 6;

  constructor() {}

  ngOnInit(): void {}

  labelFormatFn = value => {
    return `(${value} of ${this.maxValue})`;
  };

  prev() {
    // prevent going less then first step
    this.value = Math.max(0, --this.value);
  }

  next() {
    // prevent going more then sixth step
    this.value = Math.min(6, ++this.value);
  }
}
