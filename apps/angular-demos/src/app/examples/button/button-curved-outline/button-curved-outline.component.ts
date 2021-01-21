import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo-button-curved-outline',
  template: `
    <fds-button className="btn--primary--outline curved mb--2"
      >Primary</fds-button
    >&nbsp;
    <fds-button className="btn--secondary--outline curved mb--2"
      >Secondary</fds-button
    >&nbsp;
    <fds-button className="btn--success--outline curved mb--2"
      >Success</fds-button
    >&nbsp;
    <fds-button className="btn--danger--outline curved mb--2">Danger</fds-button
    >&nbsp;
    <fds-button className="btn--warning--outline curved mb--2"
      >Warning</fds-button
    >&nbsp;
    <fds-button className="btn--info--outline curved mb--2">Info</fds-button
    >&nbsp;
    <fds-button className="btn--light--outline curved mb--2">Light</fds-button
    >&nbsp;
    <fds-button className="btn--dark--outline curved mb--2">Dark</fds-button
    >&nbsp;
    <fds-button className="btn--dark--outline curved mb--2" [disabled]="true"
      >Disabled</fds-button
    >
  `,
  styles: []
})
export class ButtonCurvedOutlineComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
