import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fds-icon-fixed-height',
  template: `
    <fds-card class="d-flex"
      cardClass="has-shadow p-mid text--center d-flex flex-grow-1" headerClass="text--center"
      bodyClass="flex-grow-1">
      <fds-header>
          <span class="icon-DesignThinking mb-mid"></span>
          <h3 class="mb-mid">Lorem Ipsum</h3>
      </fds-header>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
      <ng-template fdsTemplate="footer">
          <button class="btn btn__primary__outline"> Lorem Ipsum</button>
      </ng-template>
    </fds-card>
  `,
  styles: [
  ]
})
export class IconFixedHeightComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
