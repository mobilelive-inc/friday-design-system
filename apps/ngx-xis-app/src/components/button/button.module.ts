import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonComponent} from "./button.component";

/**
 * Module that provides button compoent
 *
 * ```ts
 * import { ButtonModule } from 'components/button';
 *
 * @NgModule({
 *   imports: [
 *     ButtonModule
 *   ]
 * })
 * export class AppModule {}
 * ```
 *
 * @experimental
 */
@NgModule({
    imports: [CommonModule],
    declarations: [ButtonComponent],
    exports: [ButtonComponent]
})
export class ButtonModule {
}
