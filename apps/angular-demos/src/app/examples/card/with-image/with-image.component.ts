import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fds-with-image',
  template: `
    <fds-card
      cardClass="d--flex align--items--center flex--column border border-secondary has--shadow text--center p--5"
    >
      <figure>
        <img alt="Card" src="assets/images/img-01.png" />
      </figure>
      <p class="m--0">
        “Lorem ipsum dolor sit amet, consectetur adipiscing elit”
      </p>
      <ng-template fdsTemplate="footer">
        <h4 class="m--0">Lorem ipsum dolor</h4>
      </ng-template>
    </fds-card>
  `,
  styles: []
})
export class WithImageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
