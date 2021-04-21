import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fds-ml-button-solid',
  template: `
    <fds-button className="btn--primary mb--2">Primary</fds-button>&nbsp;
    <fds-button className="btn--secondary mb--2">Secondary</fds-button>&nbsp;
    <fds-button className="btn--success mb--2">Success</fds-button>&nbsp;
    <fds-button className="btn--danger mb--2">Danger</fds-button>&nbsp;
    <fds-button className="btn--warning mb--2">Warning</fds-button>&nbsp;
    <fds-button className="btn--info mb--2">Info</fds-button>&nbsp;
    <fds-button className="btn--light mb--2">Light</fds-button>&nbsp;
    <fds-button className="btn--dark mb--2">Dark</fds-button>&nbsp;
    <fds-button className="btn--dark mb--2" [ariaDisabled]="true"
      >Disabled</fds-button
    >
  `,
  styles: []
})
export class ButtonSolidComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
