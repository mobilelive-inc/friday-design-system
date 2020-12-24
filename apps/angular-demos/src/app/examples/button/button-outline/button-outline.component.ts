import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo-button-outline',
  template: `
    <fds-button className="btn__primary__outline mb-tiny">Primary</fds-button
    >&nbsp;
    <fds-button className="btn__secondary__outline mb-tiny"
      >Secondary</fds-button
    >&nbsp;
    <fds-button className="btn__success__outline mb-tiny">Success</fds-button
    >&nbsp;
    <fds-button className="btn__danger__outline mb-tiny">Danger</fds-button
    >&nbsp;
    <fds-button className="btn__warning__outline mb-tiny">Warning</fds-button
    >&nbsp;
    <fds-button className="btn__info__outline mb-tiny">Info</fds-button>&nbsp;
    <fds-button className="btn__light__outline mb-tiny">Light</fds-button>&nbsp;
    <fds-button className="btn__dark__outline mb-tiny">Dark</fds-button>&nbsp;
    <fds-button className="btn__dark__outline mb-tiny" [disabled]="true"
      >Disabled</fds-button
    >
  `,
  styles: []
})
export class ButtonOutlineComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
