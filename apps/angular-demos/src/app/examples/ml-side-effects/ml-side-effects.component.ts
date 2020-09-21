import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo-ml-side-effects',
  template: `
    <fds-button className="btn__primary" (onClick)="show()" *ngIf="!isDarkButtonShown">Insert Dark Button</fds-button>&nbsp;
    <fds-button className="btn__success side-effects-demo" (onClick)="hide()" *ngIf="isDarkButtonShown">Remove Dark Button</fds-button>&nbsp;
    <fds-dark-button *ngIf="isDarkButtonShown"></fds-dark-button>
  `,
  styles: [
  ],
})
export class MlSideEffectsComponent implements OnInit {
  isDarkButtonShown = false;

  constructor() { }

  ngOnInit(): void {
  }

  show(){
    this.isDarkButtonShown = true;
  }

  hide(){
    this.isDarkButtonShown = false;
  }

}
