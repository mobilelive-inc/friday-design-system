import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo-ml-tooltip',
  template: `
    <fds-tooltip tooltipText="Tooltip example MlTooltipComponent"></fds-tooltip>
  `,
  styles: [
  ],
})
export class MlTooltipComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
