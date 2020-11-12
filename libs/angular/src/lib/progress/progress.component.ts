import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "fds-progress",
  template: `
	<div class="progress mb-mid">
	  <div class="progress-bar progress-primary"
		   [style.width.%]="_getWidth()"
		   role="progressbar"
		   [attr.aria-valuenow]="value"
		   [attr.aria-valuemin]="min"
		   [attr.aria-valuemax]="max">
		<span class="pt-tiny px-tiny" *ngIf="showLabel" [ngStyle]="_getLabelStyle()">{{formatValue(value)}}</span>
	  </div>
	</div>

  `
})
export class ProgressComponent implements OnInit {

  @Input() min = 0;

  @Input() max = 100;

  @Input() value = 0;

  @Input() showLabel = false;

  @Input() displayWith: (value: number) => string | number;

  constructor() {
  }

  ngOnInit(): void {
  }

  _getWidth() {
    const widthPercent = Math.floor((this.value - this.min) / (this.max - this.min) * 100);
    return Math.min(100, Math.max(0, widthPercent));
  }

  _getLabelStyle() {
    // Label should not go out of boundaries, add compensation for min/max values
    if (this.value == this.min) {
      return { "transform": "none" };
    } else if (this.value == this.max) {
      return { "transform": "translateX(-100%)" };
    }
    return {};
  }

  formatValue(value) {
    if (this.displayWith) {
      return this.displayWith(value);
    }
    return value || 0;
  }
}
