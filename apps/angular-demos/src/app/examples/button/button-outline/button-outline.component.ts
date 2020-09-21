import { Component, OnInit } from "@angular/core";

@Component({
  selector: "demo-button-outline",
  template: `
    <fds-button className="btn__outline btn__primary">Primary</fds-button>&nbsp;
    <fds-button className="btn__outline btn__secondary">Secondary</fds-button>&nbsp;
    <fds-button className="btn__outline btn__success">Success</fds-button>&nbsp;
    <fds-button className="btn__outline btn__danger">Danger</fds-button>&nbsp;
    <fds-button className="btn__outline btn__warning">Warning</fds-button>&nbsp;
    <fds-button className="btn__outline btn__info">Info</fds-button>&nbsp;
    <fds-button className="btn__outline btn__light">Light</fds-button>&nbsp;
    <fds-button className="btn__outline btn__dark">Dark</fds-button>&nbsp;
    <fds-button className="btn__outline btn__dark" [disabled]="true">Disabled</fds-button>
  `,
  styles: []
})
export class ButtonOutlineComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
