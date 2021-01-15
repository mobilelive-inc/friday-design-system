import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo-button-curved',
  template: `
    <fds-button className="btn--primary curved mb--2">Primary</fds-button>&nbsp;
    <fds-button className="btn--secondary curved mb--2">Secondary</fds-button
    >&nbsp;
    <fds-button className="btn--success curved mb--2">Success</fds-button>&nbsp;
    <fds-button className="btn--danger curved mb--2">Danger</fds-button>&nbsp;
    <fds-button className="btn--warning curved mb--2">Warning</fds-button>&nbsp;
    <fds-button className="btn--info curved mb--2">Info</fds-button>&nbsp;
    <fds-button className="btn--light curved mb--2">Light</fds-button>&nbsp;
    <fds-button className="btn--dark curved mb--2">Dark</fds-button>&nbsp;
    <fds-button className="btn--dark curved mb--2" [disabled]="true"
      >Disabled</fds-button
    >
  `,
  styles: []
})
export class ButtonCurvedComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
