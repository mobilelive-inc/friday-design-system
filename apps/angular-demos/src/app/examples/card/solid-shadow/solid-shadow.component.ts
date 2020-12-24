import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fds-solid-shadow',
  template: `
    <fds-card cardClass="fds-card">
      <figure class="has-solidShadow-primary">
        <img alt="Card" src="assets/images/img-01.png">
      </figure>
    </fds-card>
  `,
  styles: [
  ]
})
export class SolidShadowComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
