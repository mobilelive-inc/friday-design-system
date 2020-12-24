import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fds-ml-button-solid',
  template: `
    <fds-button className="btn__primary mb-tiny">Primary</fds-button>&nbsp;
    <fds-button className="btn__secondary mb-tiny">Secondary</fds-button>&nbsp;
    <fds-button className="btn__success mb-tiny">Success</fds-button>&nbsp;
    <fds-button className="btn__danger mb-tiny">Danger</fds-button>&nbsp;
    <fds-button className="btn__warning mb-tiny">Warning</fds-button>&nbsp;
    <fds-button className="btn__info mb-tiny">Info</fds-button>&nbsp;
    <fds-button className="btn__light mb-tiny">Light</fds-button>&nbsp;
    <fds-button className="btn__dark mb-tiny">Dark</fds-button>&nbsp;
    <fds-button className="btn__dark mb-tiny" [disabled]="true"
      >Disabled</fds-button
    >
  `,
  styles: []
})
export class ButtonSolidComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
