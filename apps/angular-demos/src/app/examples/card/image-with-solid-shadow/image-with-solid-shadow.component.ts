import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fds-image-with-solid-shadow',
  template: `
    <fds-card cardClass="fds-card border border-primary has-solidShadow-primary p-mid"
      headerClass="mb-mid" bodyClass="mb-mid text--center">
      <fds-header>
        <figure class="m-none d-flex justify-content-center">
          <img alt="Card" width="110" src="assets/images/card-icon.svg">
        </figure>
      </fds-header>
      <p class="m-none">“Lorem ipsum dolor sit amet, consectetur adipiscing elit”</p>
      <ng-template fdsTemplate="footer">
        <a class="btn btn__primary__outline" href="javascript:void()">Lorem ipsum</a>
      </ng-template>
  </fds-card>
  `,
  styles: [
  ]
})
export class ImageWithSolidShadowComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
