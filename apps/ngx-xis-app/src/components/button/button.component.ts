import {
    ChangeDetectionStrategy,
    Component,
    Input
} from '@angular/core';

/**  */
export type ButtonVariants = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';

export type ButtonSize = 'lg' | 'sm' | '';

@Component({
    selector: 'ml-button',
    templateUrl: './button.template.html',
    styleUrls: ['./button.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
    /**
     * Variant of this action button.
     */
    @Input() public variant: ButtonVariants = 'primary';

    /**
     * Size of this action button.
     */
    @Input() public size: ButtonSize = '';

    /**
     * @private
     */
    getClasses() {
        const classes = [`btn__${this.variant}`];
        if (this.size) {
            classes.push(`btn--${this.size}`);
        }
        return classes;
    }
}
