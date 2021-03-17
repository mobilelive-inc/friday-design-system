import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo-button-outline',
  template: `
    <fds-button className="btn--primary--outline mb--2">Primary</fds-button
    >&nbsp;
    <fds-button className="btn--secondary--outline mb--2">Secondary</fds-button
    >&nbsp;
    <fds-button className="btn--success--outline mb--2">Success</fds-button
    >&nbsp;
    <fds-button className="btn--danger--outline mb--2">Danger</fds-button>&nbsp;
    <fds-button className="btn--warning--outline mb--2">Warning</fds-button
    >&nbsp;
    <fds-button className="btn--info--outline mb--2">Info</fds-button>&nbsp;
    <fds-button className="btn--light--outline mb--2">Light</fds-button>&nbsp;
    <fds-button className="btn--dark--outline mb--2">Dark</fds-button>&nbsp;
    <fds-button className="btn--dark--outline mb--2" [ariaDisabled]="true"
      >Disabled</fds-button
    >
  `,
  styles: []
})
export class ButtonOutlineComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
