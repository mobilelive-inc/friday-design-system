import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo-button-rounded',
  template: `
    <fds-button className="btn--primary btnRounded mb--2">Primary</fds-button
    >&nbsp;
    <fds-button className="btn--secondary btnRounded mb--2"
      >Secondary</fds-button
    >&nbsp;
    <fds-button className="btn--success btnRounded mb--2">Success</fds-button
    >&nbsp;
    <fds-button className="btn--danger btnRounded mb--2">Danger</fds-button
    >&nbsp;
    <fds-button className="btn--warning btnRounded mb--2">Warning</fds-button
    >&nbsp;
    <fds-button className="btn--info btnRounded mb--2">Info</fds-button>&nbsp;
    <fds-button className="btn--light btnRounded mb--2">Light</fds-button>&nbsp;
    <fds-button className="btn--dark btnRounded mb--2">Dark</fds-button>&nbsp;
    <fds-button className="btn--dark btnRounded mb--2" [ariaDisabled]="true"
      >Disabled</fds-button
    >
  `,
  styles: []
})
export class ButtonRoundedComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
