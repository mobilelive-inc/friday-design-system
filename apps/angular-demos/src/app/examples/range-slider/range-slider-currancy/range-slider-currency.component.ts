import { Component, OnInit } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'demo-range-slider-currency',
  template: `
    <div>
      <fds-range-slider
        [displayWith]="formatLabel"
        min="0"
        max="2000000"
        [(value)]="value"
        [thumbLabel]="true"
        [showMinMaxLabels]="true"
        step="5000"
      ></fds-range-slider>
      <pre>
      Value: {{ value }}
    </pre
      >
    </div>
  `,
  styles: []
})
export class RangeSliderCurrencyComponent {
  value = 500000;

  constructor(private currencyPipe: CurrencyPipe) {}

  formatLabel = (value): string => {
    return this.currencyPipe.transform(value, 'CAD', 'symbol-narrow', '1.0');
  };
}
