import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fds-ml-button-clear',
  template: `
    <button type="button" class="{{btnType}} btn btn__{{variant}} mb-tiny" [ngClass]="isDisable && 'disabled'">
    {{btnTitle}}
    </button>
  `,
  styles: []
})
export class ButtonClearComponent implements OnInit {
  constructor() {}
  @Input() btnType: string
  @Input() variant: string
  @Input() btnTitle: string
  @Input() isDisable: boolean = false;
  ngOnInit(): void {}
}
