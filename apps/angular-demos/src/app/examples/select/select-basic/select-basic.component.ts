import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'demo-select-basic',
  template: `
    <form class="form" role="form" [formGroup]="form">
      <div class="row">
        <div class="col-4">
          <fds-form-field>
            <fds-label>Select</fds-label>
            <select fdsInput formControlName="field1">
              <option value="">Pick an option</option>
              <option>Pottery</option>
              <option>Gardening</option>
              <option>Art</option>
              <option>Photography</option>
              <option>Entrepreneurship</option>
            </select>
            <fds-error *ngIf="form.get('field1')?.hasError('required')"
              >Field1 is required</fds-error
            >
          </fds-form-field>
          <pre>Value: {{ form.get('field1')?.value }}</pre>
        </div>

        <div class="col-4">
          <fds-form-field [clearBtn]="true">
            <fds-label>Select with Clear Button</fds-label>
            <select fdsInput formControlName="field2" [required]="true">
              <option value="">Pick an option</option>
              <option>Pottery</option>
              <option>Gardening</option>
              <option>Art</option>
              <option>Photography</option>
              <option>Entrepreneurship</option>
            </select>
            <fds-error *ngIf="form.get('field2')?.hasError('required')"
              >Field2 is required</fds-error
            >
          </fds-form-field>
          <pre>Value: {{ form.get('field2')?.value }}</pre>
        </div>

        <div class="col-4">
          <fds-form-field [clearBtn]="true">
            <fds-label>Select Disabled</fds-label>
            <select fdsInput [required]="true" formControlName="field3">
              <option value="">Pick an option</option>
              <option value="pottery">Pottery</option>
              <option value="Gardening">Gardening</option>
              <option value="Art">Art</option>
              <option value="Photography">Photography</option>
              <option value="Entrepreneurship">Entrepreneurship</option>
            </select>
            <fds-error *ngIf="form.get('field3')?.hasError('required')"
              >Field3 is required</fds-error
            >
          </fds-form-field>
          <pre>Value: {{ form.get('field3')?.value }}</pre>
        </div>
      </div>
    </form>
  `,
  styles: []
})
export class SelectBasicComponent implements OnInit {
  form = this.fb.group({
    field1: new FormControl(''),
    field2: new FormControl('', Validators.required),
    field3: new FormControl(
      { value: 'pottery', disabled: true },
      Validators.required
    )
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
}
