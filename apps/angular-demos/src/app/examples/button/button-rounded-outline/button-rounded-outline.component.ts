import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo-button-rounded-outline',
  template: `
    <fds-button className="btn__outline btn--rounded btn__primary">Primary</fds-button>&nbsp;
    <fds-button className="btn__outline btn--rounded btn__secondary">Secondary</fds-button>&nbsp;
    <fds-button className="btn__outline btn--rounded btn__success">Success</fds-button>&nbsp;
    <fds-button className="btn__outline btn--rounded btn__danger">Danger</fds-button>&nbsp;
    <fds-button className="btn__outline btn--rounded btn__warning">Warning</fds-button>&nbsp;
    <fds-button className="btn__outline btn--rounded btn__info">Info</fds-button>&nbsp;
    <fds-button className="btn__outline btn--rounded btn__light">Light</fds-button>&nbsp;
    <fds-button className="btn__outline btn--rounded btn__dark">Dark</fds-button>&nbsp;
    <fds-button className="btn__outline btn--rounded btn__dark" [disabled]="true">Disabled</fds-button>
  `,
  styles: [
  ],
})
export class ButtonRoundedOutlineComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
