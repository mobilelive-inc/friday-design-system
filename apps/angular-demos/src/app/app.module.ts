import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {FdsAngularModule} from "@fds/angular";
import {ThemeSwitcherComponent} from "./theme-switcher-scss/theme-switcher.component";
import {MlSideEffectsComponent} from "./examples/ml-side-effects/ml-side-effects.component";
import { MlTooltipComponent } from './examples/ml-tooltip/ml-tooltip.component';
import { MlPopoverComponent } from './examples/ml-popover/ml-popover.component';
import { ButtonSolidComponent } from "./examples/button/button-solid/button-solid.component";
import { ButtonClearComponent } from "./examples/button/button-clear/button-clear.component";
import { ButtonDirectiveComponent } from "./examples/button/button-directive/button-directive.component";
import { ButtonOutlineComponent } from './examples/button/button-outline/button-outline.component';
import { ButtonRoundedComponent } from './examples/button/button-rounded/button-rounded.component';
import { ButtonRoundedOutlineComponent } from './examples/button/button-rounded-outline/button-rounded-outline.component';
import { ButtonCurvedComponent } from './examples/button/button-curved/button-curved.component';
import { ButtonCurvedOutlineComponent } from './examples/button/button-curved-outline/button-curved-outline.component';

@NgModule({
    declarations: [AppComponent,
        ButtonSolidComponent,
        ButtonClearComponent,
        ButtonDirectiveComponent,
        MlSideEffectsComponent,
        ThemeSwitcherComponent,
        MlTooltipComponent,
        MlPopoverComponent,
        ButtonOutlineComponent,
        ButtonRoundedComponent,
        ButtonRoundedOutlineComponent,
        ButtonCurvedComponent,
        ButtonCurvedOutlineComponent],
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
