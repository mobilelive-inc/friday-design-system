import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo-button-curved-outline',
  template: `
	<fds-button className="btn__outline btn--curved btn__primary">Primary</fds-button>&nbsp;
	<fds-button className="btn__outline btn--curved btn__secondary">Secondary</fds-button>&nbsp;
	<fds-button className="btn__outline btn--curved btn__success">Success</fds-button>&nbsp;
	<fds-button className="btn__outline btn--curved btn__danger">Danger</fds-button>&nbsp;
	<fds-button className="btn__outline btn--curved btn__warning">Warning</fds-button>&nbsp;
	<fds-button className="btn__outline btn--curved btn__info">Info</fds-button>&nbsp;
	<fds-button className="btn__outline btn--curved btn__light">Light</fds-button>&nbsp;
	<fds-button className="btn__outline btn--curved btn__dark">Dark</fds-button>&nbsp;
	<fds-button className="btn__outline btn--curved btn__dark" [disabled]="true">Disabled</fds-button>
  `,
  styles: [
  ],
})
export class ButtonCurvedOutlineComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
