import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fds-no-icon',
  template: `
    <fds-card
      class="d--flex"
      cardClass="d--flex align--items--center flex--column has--shadow p--5 text--center"
      headerClass="mb--5 text--center"
      bodyClass="flex--grow--1"
    >
      <fds-header aria-label="Lorem ipsum dolor sit amet">
        <h3 aria-hidden="true" class="m--0">Lorem ipsum</h3>
        <span class="divider divider--sm my--5 w--100 bg--dark"></span>
        <h4 aria-hidden="true" class="h3 m--0">dolor sit amet</h4>
      </fds-header>
      <p class="m--0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt, consectetur adipiscing elit, sed do eiusmod tempor,
        sed do eiusmod tempor.
      </p>
    </fds-card>
  `,
  styles: []
})
export class NoIconComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
