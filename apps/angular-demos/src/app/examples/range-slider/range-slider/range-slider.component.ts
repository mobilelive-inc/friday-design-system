import { Component, OnInit } from "@angular/core";
import { CurrencyPipe } from "@angular/common";

@Component({
  selector: "demo-range-slider",
  template: `
	<div>
	  <fds-range-slider
		  [(value)]="value"
	  ></fds-range-slider>
	  <pre>
      Value: {{value}}
    </pre>
	</div>
  `,
  styles: []
})
export class RangeSliderComponent {
  value = 60;
}
