import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fds-simple-card',
  template: `
    <fds-card cardClass="fds-card">
      <figure class="m-none">
        <img alt="Card" src="assets/images/img-01.png">
      </figure>
    </fds-card>
  `,
  styles: [
  ]
})
export class SimpleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
