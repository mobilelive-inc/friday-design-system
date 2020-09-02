import {Component, Input, AfterContentInit, TemplateRef, EventEmitter, Output} from '@angular/core';

@Component({
    selector: 'ml-button',
    template: `
        <button [attr.type]="type" [class]="className" [ngStyle]="style" [disabled]="disabled"
                [ngClass]="{'btn':true,
                        'p-button-icon-only': (icon && !label),
                        'p-button-vertical': (iconPos === 'top' || iconPos === 'bottom') && label}"
                (click)="onClick.emit($event)" (focus)="onFocus.emit($event)" (blur)="onBlur.emit($event)" pRipple>
            <ng-content></ng-content>
            <ng-container *ngTemplateOutlet="contentTemplate"></ng-container>
            <span [ngClass]="{'p-button-icon': true,
                        'p-button-icon-left': iconPos === 'left' && label,
                        'p-button-icon-right': iconPos === 'right' && label,
                        'p-button-icon-top': iconPos === 'top' && label,
                        'p-button-icon-bottom': iconPos === 'bottom' && label}"
                  [class]="icon" *ngIf="icon" [attr.aria-hidden]="true"></span>
            <span class="p-button-label" [attr.aria-hidden]="icon && !label">{{label || '&nbsp;'}}</span>
            <span [ngClass]="'p-badge'" *ngIf="badge" [class]="badgeClass">{{badge}}</span>
        </button>
    `,
    styleUrls: ['./ml-button.component.scss']
})
export class MlButtonComponent implements AfterContentInit {
    @Input() type: string = "button";

    @Input() iconPos: string = 'left';

    @Input() icon: string;

    @Input() badge: string;

    @Input() label: string;

    @Input() disabled: boolean;

    @Input() style: any;

    @Input() className: string;

    @Input() badgeClass: string;

    contentTemplate: TemplateRef<any>;

    // @ContentChildren(PrimeTemplate) templates: QueryList<any>;

    @Output() onClick: EventEmitter<any> = new EventEmitter();

    @Output() onFocus: EventEmitter<any> = new EventEmitter();

    @Output() onBlur: EventEmitter<any> = new EventEmitter();

    ngAfterContentInit() {
        // this.templates.forEach((item) => {
        //     switch (item.getType()) {
        //         case 'content':
        //             this.contentTemplate = item.template;
        //             break;
        //
        //         default:
        //             this.contentTemplate = item.template;
        //             break;
        //     }
        // });
    }
}
