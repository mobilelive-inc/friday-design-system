import {Component, Input} from '@angular/core';

@Component({
    selector: 'fds-tab',
    template: `
        <ul [class]="className">
            <li class="nav-item">
            <a class="nav-link {{isActive ? 'active' : ''}}" [style]="style">{{label}}</a>
            </li>
        </ul>
    `
})
export class TabComponent {

    @Input() label: string;

    @Input() disabled: boolean;

    @Input() style: any;

    @Input() className: string;

    @Input() isActive: boolean;

}
