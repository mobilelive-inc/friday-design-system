import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fds-image-with-solid-shadow',
  template: `
    <fds-card
      cardClass="d--flex align--items--center flex--column border border-primary has--solid--shadow--primary p--5"
      headerClass="mb--5"
      bodyClass="mb--5 text--center"
    >
      <fds-header>
        <figure class="m-none d--flex justify--content--center">
          <img alt="Card" width="110" src="assets/images/card-icon.svg" />
        </figure>
      </fds-header>
      <p class="m--0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt, consectetur adipiscing elit, sed do eiusmod tempor,
        sed do eiusmod tempor.
      </p>
      <ng-template fdsTemplate="footer">
        <a class="btn btn--primary--outline" href="javascript:void()"
          >Lorem ipsum</a
        >
      </ng-template>
    </fds-card>
  `,
  styles: []
})
export class ImageWithSolidShadowComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
