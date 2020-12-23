import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fds-ml-button-clear',
  template: `
    <button type="button" class="clear btn btn__primary mb-tiny">
      Primary
    </button>
    <button type="button" class="clear btn btn__secondary mb-tiny">
      Secondary
    </button>
    <button type="button" class="clear btn btn__success mb-tiny">
      Success
    </button>
    <button type="button" class="clear btn btn__danger mb-tiny">Danger</button>
    <button type="button" class="clear btn btn__warning mb-tiny">
      Warning
    </button>
    <button type="button" class="clear btn btn__info mb-tiny">Info</button>
    <button type="button" class="clear btn btn__light mb-tiny">Light</button>
    <button type="button" class="clear btn btn__dark mb-tiny">Dark</button>
    <button type="button" class="clear btn btn__dark mb-tiny disabled">
      Disabled
    </button>
  `,
  styles: []
})
export class ButtonClearComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
