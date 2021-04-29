import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo-ml-side-effects',
  template: `
    <fds-button
      className="btnprimary"
      (onClick)="show()"
      *ngIf="!isDarkButtonShown"
      >Insert Dark Button</fds-button
    >&nbsp;
    <fds-button
      className="btn--success side-effects-demo"
      (onClick)="hide()"
      *ngIf="isDarkButtonShown"
      >Remove Dark Button</fds-button
    >&nbsp;
  `,
  styles: []
})
export class MlSideEffectsComponent implements OnInit {
  isDarkButtonShown = false;

  constructor() {}

  ngOnInit(): void {}

  show() {
    this.isDarkButtonShown = true;
  }

  hide() {
    this.isDarkButtonShown = false;
  }
}
