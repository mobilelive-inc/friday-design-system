import {
    ChangeDetectionStrategy,
    Component,
    Input
} from '@angular/core';

/**  */
export type ButtonType = 'icon-and-text' | 'icon-only' | 'text-only' | '';

/**
 * `ml-button` implements a button.
 *
 * @experimental
 */
@Component({
    templateUrl: './button.template.html',
    styleUrls: ['./button.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
    /**
     * Type of this action button.
     */
    @Input() public uType: ActionType = this.options.defaultType;

    /**
     * Variant of this action button.
     */
    @Input() public uVariant: ActionVariant = this.options.defaultVariant;

    /**
     * Size of this action button.
     */
    @Input() public uSize: ActionSize = '';
}
