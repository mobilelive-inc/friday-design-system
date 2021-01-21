import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'demo-radio-basics',
  template: `
    <div class="row">
      <div class="col-4">
        <label id="example-radio-group-label-1"
          >Pick your favorite fruit (value)</label
        >
        <fds-radio-group
          aria-labelledby="example-radio-group-label-1"
          [value]="favoriteFruitValue"
          (change)="favoriteFruitValue = $event.value"
        >
          <fds-radio *ngFor="let fruit of fruits" [value]="fruit.value">{{
            fruit.title
          }}</fds-radio>
        </fds-radio-group>
        <pre>
favoriteFruitValue: {{ favoriteFruitValue }}
    </pre>
      </div>

      <div class="col-4">
        <label id="example-radio-group-label-2"
          >Pick your favorite fruit (ngModel)</label
        >
        <fds-radio-group
          aria-labelledby="example-radio-group-label-2"
          [(ngModel)]="favoriteFruitNgModel"
        >
          <fds-radio *ngFor="let fruit of fruits" [value]="fruit.value">{{
            fruit.title
          }}</fds-radio>
        </fds-radio-group>
        <pre>
favoriteFruitNgModel: {{ favoriteFruitNgModel }}
    </pre>
      </div>

      <div class="col-4">
        <form class="form" role="form" [formGroup]="form">
          <label id="example-radio-group-label-3"
            >Pick your favorite fruit (ReactiveForms)</label
          >
          <fds-radio-group
            aria-labelledby="example-radio-group-label-3"
            formControlName="favoriteFruit"
          >
            <fds-radio *ngFor="let fruit of fruits" [value]="fruit.value">{{
              fruit.title
            }}</fds-radio>
          </fds-radio-group>
        </form>
        <pre>
ReactiveForm: {{ form.get('favoriteFruit')?.value }}
    </pre>
      </div>
    </div>
  `
})
export class RadioBasicsComponent {
  fruits = [
    { title: 'Mango', value: 'mango' },
    { title: 'Apple', value: 'apple' },
    { title: 'Orange', value: 'orange' }
  ];

  // Value Example
  favoriteFruitValue = this.fruits[2].value;

  // NgModel Example
  favoriteFruitNgModel = this.fruits[1].value;

  // ReactiveForms
  form = this.fb.group({
    favoriteFruit: new FormControl(this.fruits[0].value)
  });

  constructor(private fb: FormBuilder) {}

  // End ReactiveForms
}
