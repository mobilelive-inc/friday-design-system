import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {FdsAngularModule} from "@nx-hybrid-demo/angular";
import {MlButtonSolidComponent} from './ml-button-solid/ml-button-solid.component';
import {MlButtonClearComponent} from './ml-button-clear/ml-button-clear.component';
import {MlButtonDirectiveComponent} from './ml-button-directive/ml-button-directive.component';
import {ThemeSwitcherComponent} from "./theme-switcher/theme-switcher.component";
import {MlSideEffectsComponent} from "./ml-side-effects/ml-side-effects.component";
import { MlTooltipComponent } from './ml-tooltip/ml-tooltip.component';
import { MlPopoverComponent } from './ml-popover/ml-popover.component';

@NgModule({
    declarations: [AppComponent,
        MlButtonSolidComponent,
        MlButtonClearComponent,
        MlButtonDirectiveComponent,
        MlSideEffectsComponent,
        ThemeSwitcherComponent,
        MlTooltipComponent,
        MlPopoverComponent],
    imports: [
        BrowserModule,
        FdsAngularModule,
        RouterModule.forRoot([], {initialNavigation: 'enabled'}),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {
}
