import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nx-hybrid-demo-ml-button-solid',
  template: `      
      <fds-button className="btn__primary">Primary</fds-button>&nbsp;
      <fds-button className="btn__secondary">Secondary</fds-button>&nbsp;
      <fds-button className="btn__success">Success</fds-button>&nbsp;
      <fds-button className="btn__danger">Danger</fds-button>&nbsp;
      <fds-button className="btn__warning">Warning</fds-button>&nbsp;
      <fds-button className="btn__info">Info</fds-button>&nbsp;
      <fds-button className="btn__light">Light</fds-button>&nbsp;
      <fds-button className="btn__dark">Dark</fds-button>&nbsp;
      <fds-button className="btn__dark" [disabled]="true">Disabled</fds-button>
    <hr/>
  `,
  styles: [
  ],
})
export class MlButtonSolidComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
