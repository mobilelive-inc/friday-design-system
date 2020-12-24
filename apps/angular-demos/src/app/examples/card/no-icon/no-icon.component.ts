import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fds-no-icon',
  template: `
    <fds-card class="d-flex"
      cardClass="has-shadow p-mid d-flex flex-grow-1" headerClass="mb-mid text--center"
      bodyClass="flex-grow-1">
      <fds-header>
        <h2 class="m-none">Lorem Ipsum</h2>
        <span class="divider my-mid w-100 bg__dark"></span>
        <h3 class="m-none">Lorem Ipsum</h3>
      </fds-header>
      <p class="m-none">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt, consectetur adipiscing elit, sed do eiusmod tempor, sed do eiusmod tempor.</p>
    </fds-card>
  `,
  styles: [
  ]
})
export class NoIconComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
