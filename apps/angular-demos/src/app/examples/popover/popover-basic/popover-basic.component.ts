import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'demo-popover-basic',
  template: `
    <div class="row">
      <div class="col--2 text--center">
        <div>
          <span
            class="icon-warning-circle"
            [fdsPopoverBody]="
              'Small simple tooltip with text and without title'
            "
            style="font-size: 1.5rem; color: var(--primary);"
          ></span>
        </div>
        <span>Text Only</span>
      </div>

      <div class="col--2 text--center">
        <div>
          <span
            class="icon-warning-circle"
            [fdsPopoverTitle]="'Tooltip title text'"
            [fdsPopoverBody]="
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
            "
            style="font-size: 1.5rem; color: var(--primary);"
          ></span>
        </div>
        <span>Title+Text</span>
      </div>

      <div class="col--2 text--center">
        <div>
          <span
            class="icon-warning-circle"
            [fdsPopoverTitle]="'Tooltip title text'"
            fdsPopoverBody="Line1: Lorem Ipsum is simply dummy <br> Line2: text of the printing and typesetting industry <br>Line3: Lorem Ipsum has been the industry"
            style="font-size: 1.5rem; color: var(--primary);"
          ></span>
        </div>
        <span>Multiple lines</span>
      </div>

      <div class="col--2 text--center">
        <div>
          <span
            class="icon-warning-circle"
            [fdsPopover]="{ placement: 'bottom' }"
            [fdsPopoverBody]="'Counter ' + counter"
            style="font-size: 1.5rem; color: var(--primary);"
          ></span>
        </div>
        <span>Placement - Bottom</span>
      </div>

      <div class="col--2 text--center">
        <div>
          <span
            class="icon-warning-circle"
            [fdsPopover]="{ placement: 'right' }"
            [fdsPopoverBody]="
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
            "
            style="font-size: 1.5rem; color: var(--primary);"
          ></span>
        </div>
        <span>Right</span>
      </div>

      <div class="col--2 text--center">
        <div>
          <span
            class="icon-warning-circle"
            [fdsPopover]="{ theme: 'light' }"
            [fdsPopoverBody]="
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
            "
            style="font-size: 1.5rem; color: var(--primary);"
          ></span>
        </div>
        <span>Light Theme</span>
      </div>
    </div>
  `,
  styles: []
})
export class PopoverBasicComponent implements OnInit, OnDestroy {
  counter = 0;
  interval;

  constructor() {}

  ngOnInit(): void {
    this.interval = setInterval(() => {
      this.counter++;
    }, 400);
  }

  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
}
