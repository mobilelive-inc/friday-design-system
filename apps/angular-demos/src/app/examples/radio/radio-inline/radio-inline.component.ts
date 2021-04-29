import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'demo-radio-inline',
  template: `
    <div class="row">
      <div class="col--12">
        <form class="form" role="form" [formGroup]="form">
          <label id="example-radio-group-label-4"
            >Pick your favorite fruit</label
          >
          <fds-radio-group
            aria-labelledby="example-radio-group-label-4"
            formControlName="favoriteFruit"
          >
            <fds-radio *ngFor="let fruit of fruits" [value]="fruit.value">{{
              fruit.title
            }}</fds-radio>
          </fds-radio-group>
        </form>
        <pre>{{ form.get('favoriteFruit')?.value }}</pre>
      </div>
    </div>
  `,
  styleUrls: ['./radio-inline.component.scss']
})
export class RadioInlineComponent {
  fruits = [
    { title: 'Mango', value: 'mango' },
    { title: 'Apple', value: 'apple' },
    { title: 'Orange', value: 'orange' }
  ];

  // ReactiveForms
  form = this.fb.group({
    favoriteFruit: new FormControl(this.fruits[0].value)
  });

  constructor(private fb: FormBuilder) {}

  // End ReactiveForms
}
