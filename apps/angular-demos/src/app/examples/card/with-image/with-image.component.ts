import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fds-with-image',
  template: `
    <fds-card cardClass="fds-card border border-secondary has-shadow text--center p-mid">
      <figure>
        <img alt="Card" src="assets/images/img-01.png">
      </figure>
      <p class="m-none">“Lorem ipsum dolor sit amet, consectetur adipiscing elit”</p>
      <ng-template fdsTemplate="footer">
        <h3 class="m-none">Lorem ipsum dolor</h3>
      </ng-template>
    </fds-card>
  `,
  styles: [
  ]
})
export class WithImageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
