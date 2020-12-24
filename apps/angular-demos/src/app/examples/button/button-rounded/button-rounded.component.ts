import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo-button-rounded',
  template: `
    <fds-button className="btn__primary btnRounded mb-tiny">Primary</fds-button
    >&nbsp;
    <fds-button className="btn__secondary btnRounded mb-tiny"
      >Secondary</fds-button
    >&nbsp;
    <fds-button className="btn__success btnRounded mb-tiny">Success</fds-button
    >&nbsp;
    <fds-button className="btn__danger btnRounded mb-tiny">Danger</fds-button
    >&nbsp;
    <fds-button className="btn__warning btnRounded mb-tiny">Warning</fds-button
    >&nbsp;
    <fds-button className="btn__info btnRounded mb-tiny">Info</fds-button>&nbsp;
    <fds-button className="btn__light btnRounded mb-tiny">Light</fds-button
    >&nbsp;
    <fds-button className="btn__dark btnRounded mb-tiny">Dark</fds-button>&nbsp;
    <fds-button className="btn__dark btnRounded mb-tiny" [disabled]="true"
      >Disabled</fds-button
    >
  `,
  styles: []
})
export class ButtonRoundedComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
