import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fds-ml-button-clear',
  template: `
    <button type="button" class="clear btn btn__primary">Primary</button>
    <button type="button" class="clear btn btn__secondary">Secondary</button>
    <button type="button" class="clear btn btn__success">Success</button>
    <button type="button" class="clear btn btn__danger">Danger</button>
    <button type="button" class="clear btn btn__warning">Warning</button>
    <button type="button" class="clear btn btn__info">Info</button>
    <button type="button" class="clear btn btn__light">Light</button>
    <button type="button" class="clear btn btn__dark">Dark</button>
    <button type="button" class="clear btn btn__dark disabled">Disabled</button>
  `,
  styles: [
  ],
})
export class ButtonClearComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
