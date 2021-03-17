import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'demo-checkbox-basic',
  template: `
    <div class="row">
      <div class="col-4">
        <fds-checkbox
          [formControl]="paidOvertime"
          label="Paid Overtime"
          binary="true"
          inputId="binary"
        ></fds-checkbox>
        <pre>
          paidOvertimeValue: {{ paidOvertime.value }}
        </pre
        >
      </div>
    </div>
  `,
  styles: []
})
export class BasicCheckboxComponent implements OnInit {
  paidOvertime: FormControl;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.paidOvertime = new FormControl(false);
  }
}
