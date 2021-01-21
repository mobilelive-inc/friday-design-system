import {
  Component,
  Input,
  ContentChild,
  ContentChildren,
  TemplateRef,
  QueryList,
  ElementRef
} from '@angular/core';
import { Template, Header, Footer } from '../shared/template.directive';

@Component({
  selector: 'fds-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() style: any;

  @Input() cardClass: string;

  @Input() headerClass: string;

  @Input() bodyClass: string;

  @Input() footerClass: string;

  @ContentChild(Header) headerFacet;

  @ContentChild(Footer) footerFacet;

  @ContentChildren(Template) templates: QueryList<any>;

  headerTemplate: TemplateRef<any>;

  contentTemplate: TemplateRef<any>;

  footerTemplate: TemplateRef<any>;

  constructor(private el: ElementRef) {}

  ngAfterContentInit() {
    this.templates.forEach(item => {
      switch (item.getType()) {
        case 'header':
          this.headerTemplate = item.template;
          break;

        case 'content':
          this.contentTemplate = item.template;
          break;

        case 'footer':
          this.footerTemplate = item.template;
          break;

        default:
          this.contentTemplate = item.template;
          break;
      }
    });
  }
}
