import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fds-simple-card',
  template: `
    <fds-card>
      <figure class="m--0">
        <img alt="Card" src="assets/images/img-01.png" />
      </figure>
    </fds-card>
  `,
  styles: []
})
export class SimpleComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
