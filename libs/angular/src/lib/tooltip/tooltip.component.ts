import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'fds-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent implements OnInit {
  @Input() tooltipText = 'Tooltip mock text';

  constructor() { }

  ngOnInit(): void {
  }

}
