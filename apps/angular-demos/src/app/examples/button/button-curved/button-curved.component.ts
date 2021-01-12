import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'demo-button-curved',
  template: `
    <fds-button className="btn__primary curved mb-tiny">Primary</fds-button
    >&nbsp;
    <fds-button className="btn__secondary curved mb-tiny">Secondary</fds-button
    >&nbsp;
    <fds-button className="btn__success curved mb-tiny">Success</fds-button
    >&nbsp;
    <fds-button className="btn__danger curved mb-tiny">Danger</fds-button>&nbsp;
    <fds-button className="btn__warning curved mb-tiny">Warning</fds-button
    >&nbsp;
    <fds-button className="btn__info curved mb-tiny">Info</fds-button>&nbsp;
    <fds-button className="btn__light curved mb-tiny">Light</fds-button>&nbsp;
    <fds-button className="btn__dark curved mb-tiny">Dark</fds-button>&nbsp;
    <fds-button className="btn__dark curved mb-tiny" [disabled]="true"
      >Disabled</fds-button
    >
  `,
  styles: []
})
export class ButtonCurvedComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
