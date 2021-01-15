import { Directive, Input, TemplateRef, Component } from '@angular/core';

@Component({
  selector: 'fds-header',
  template: '<ng-content></ng-content>'
})
export class Header {}

@Component({
  selector: 'fds-footer',
  template: '<ng-content></ng-content>'
})
export class Footer {}

@Directive({
  selector: '[fdsTemplate]'
})
export class Template {
  @Input() type: string;

  @Input('fdsTemplate') name: string;

  constructor(public template: TemplateRef<any>) {}

  getType(): string {
    return this.name;
  }
}
