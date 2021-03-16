import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'demo-inline-check',
  template: `
    <label id="example-radio-group-label-3" class="d--block">
      Pick your favorite fruit
    </label>
    <div class="row">
      <fds-checkbox
        styleClass="ml--3 mr--2"
        *ngFor="let cat of categories"
        [formControl]="form.controls['options']"
        [label]="cat.label"
        [value]="cat.value"
      >
      </fds-checkbox>
    </div>
    <pre> favoriteFruitValue: {{ form.value.options | json }}<pre></pre></pre>
  `,
  styles: []
})
export class InlineCheckboxComponent implements OnInit {
  form: FormGroup;
  categories = [
    { label: 'Mango', value: 'Mango' },
    { label: 'Peach', value: 'Peach' },
    { label: 'PineApple', value: 'PineApple' }
  ];
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      options: [['Mango']]
    });
  }
}
