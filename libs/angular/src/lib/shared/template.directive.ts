import { Directive, Input, TemplateRef } from "@angular/core";

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
