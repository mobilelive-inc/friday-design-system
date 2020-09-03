import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nx-hybrid-demo-ml-button-solid',
  template: `      
      <ml-button className="btn__primary">Primary</ml-button>&nbsp;
      <ml-button className="btn__secondary">Secondary</ml-button>&nbsp;
      <ml-button className="btn__success">Success</ml-button>&nbsp;
      <ml-button className="btn__danger">Danger</ml-button>&nbsp;
      <ml-button className="btn__warning">Warning</ml-button>&nbsp;
      <ml-button className="btn__info">Info</ml-button>&nbsp;
      <ml-button className="btn__light">Light</ml-button>&nbsp;
      <ml-button className="btn__dark">Dark</ml-button>&nbsp;
      <ml-button className="btn__dark" [disabled]="true">Disabled</ml-button>
    <hr/>
  `,
  styles: [
  ],
})
export class MlButtonSolidComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
