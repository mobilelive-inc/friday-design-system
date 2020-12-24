import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo-button-rounded-outline',
  template: `
    <fds-button className="btn__primary__outline btnRounded mb-tiny"
      >Primary</fds-button
    >&nbsp;
    <fds-button className="btn__secondary__outline btnRounded mb-tiny"
      >Secondary</fds-button
    >&nbsp;
    <fds-button className="btn__success__outline btnRounded mb-tiny"
      >Success</fds-button
    >&nbsp;
    <fds-button className="btn__danger__outline btnRounded mb-tiny"
      >Danger</fds-button
    >&nbsp;
    <fds-button className="btn__warning__outline btnRounded mb-tiny"
      >Warning</fds-button
    >&nbsp;
    <fds-button className="btn__info__outline btnRounded mb-tiny"
      >Info</fds-button
    >&nbsp;
    <fds-button className="btn__light__outline btnRounded mb-tiny"
      >Light</fds-button
    >&nbsp;
    <fds-button className="btn__dark__outline btnRounded mb-tiny"
      >Dark</fds-button
    >&nbsp;
    <fds-button
      className="btn__dark__outline btnRounded mb-tiny"
      [disabled]="true"
      >Disabled</fds-button
    >
  `,
  styles: []
})
export class ButtonRoundedOutlineComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
