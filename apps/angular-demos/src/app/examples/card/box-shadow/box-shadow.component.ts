import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fds-box-shadow',
  template: `
    <fds-card cardClass="fds-card">
      <figure class="m-none has-shadow">
        <img alt="Card" src="assets/images/img-01.png">
      </figure>
    </fds-card>
  `,
  styles: [
  ]
})
export class BoxShadowComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
