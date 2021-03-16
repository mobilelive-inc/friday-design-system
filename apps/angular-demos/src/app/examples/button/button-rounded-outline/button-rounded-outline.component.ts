import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo-button-rounded-outline',
  template: `
    <fds-button className="btn--primary--outline btnRounded mb--2"
      >Primary</fds-button
    >&nbsp;
    <fds-button className="btn--secondary--outline btnRounded mb--2"
      >Secondary</fds-button
    >&nbsp;
    <fds-button className="btn--success--outline btnRounded mb--2"
      >Success</fds-button
    >&nbsp;
    <fds-button className="btn--danger--outline btnRounded mb--2"
      >Danger</fds-button
    >&nbsp;
    <fds-button className="btn--warning--outline btnRounded mb--2"
      >Warning</fds-button
    >&nbsp;
    <fds-button className="btn--info--outline btnRounded mb--2">Info</fds-button
    >&nbsp;
    <fds-button className="btn--light--outline btnRounded mb--2"
      >Light</fds-button
    >&nbsp;
    <fds-button className="btn--dark--outline btnRounded mb--2">Dark</fds-button
    >&nbsp;
    <fds-button
      className="btn--dark--outline btnRounded mb--2"
      [ariaDisabled]="true"
      >Disabled</fds-button
    >
  `,
  styles: []
})
export class ButtonRoundedOutlineComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
