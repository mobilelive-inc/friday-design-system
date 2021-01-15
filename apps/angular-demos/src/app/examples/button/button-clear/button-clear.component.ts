import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fds-ml-button-clear',
  template: `
    <button type="button" class="clear btn btn--primary mb--2">
      Primary
    </button>
    <button type="button" class="clear btn btn--secondary mb--2">
      Secondary
    </button>
    <button type="button" class="clear btn btn--success mb--2">
      Success
    </button>
    <button type="button" class="clear btn btn--danger mb--2">Danger</button>
    <button type="button" class="clear btn btn--warning mb--2">
      Warning
    </button>
    <button type="button" class="clear btn btn--info mb--2">Info</button>
    <button type="button" class="clear btn btn--light mb--2">Light</button>
    <button type="button" class="clear btn btn--dark mb--2">Dark</button>
    <button type="button" class="clear btn btn--dark mb--2 disabled">
      Disabled
    </button>
  `,
  styles: []
})
export class ButtonClearComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
