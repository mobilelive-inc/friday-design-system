import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo-button-curved-outline',
  template: `
    <fds-button className="btn__primary__outline curved mb-tiny"
      >Primary</fds-button
    >&nbsp;
    <fds-button className="btn__secondary__outline curved mb-tiny"
      >Secondary</fds-button
    >&nbsp;
    <fds-button className="btn__success__outline curved mb-tiny"
      >Success</fds-button
    >&nbsp;
    <fds-button className="btn__danger__outline curved mb-tiny"
      >Danger</fds-button
    >&nbsp;
    <fds-button className="btn__warning__outline curved mb-tiny"
      >Warning</fds-button
    >&nbsp;
    <fds-button className="btn__info__outline curved mb-tiny">Info</fds-button
    >&nbsp;
    <fds-button className="btn__light__outline curved mb-tiny">Light</fds-button
    >&nbsp;
    <fds-button className="btn__dark__outline curved mb-tiny">Dark</fds-button
    >&nbsp;
    <fds-button className="btn__dark__outline curved mb-tiny" [disabled]="true"
      >Disabled</fds-button
    >
  `,
  styles: []
})
export class ButtonCurvedOutlineComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
