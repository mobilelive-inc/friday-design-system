import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fds-icon-fixed-height',
  template: `
    <fds-card
      class="d--flex"
      cardClass="d--flex align--items--center flex--column has--shadow p--5 text--center"
      headerClass="text--center"
      bodyClass="flex--grow--1"
    >
      <fds-header>
        <span class="icon-DesignThinking mb-5"></span>
        <h4 class="mb--5">Lorem Ipsum</h4>
      </fds-header>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt.
      </p>
      <ng-template fdsTemplate="footer">
        <button class="btn btn--primary--outline">Lorem Ipsum</button>
      </ng-template>
    </fds-card>
  `,
  styles: []
})
export class IconFixedHeightComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
