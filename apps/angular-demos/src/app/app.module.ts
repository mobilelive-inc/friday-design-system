import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { RouterModule } from "@angular/router";
import { FdsAngularModule, FdsModalModule } from "@fds/angular";
import { ThemeSwitcherComponent } from "./theme-switcher-scss/theme-switcher.component";
import { MlSideEffectsComponent } from "./examples/ml-side-effects/ml-side-effects.component";
import { ButtonSolidComponent } from "./examples/button/button-solid/button-solid.component";
import { ButtonClearComponent } from "./examples/button/button-clear/button-clear.component";
import { ButtonDirectiveComponent } from "./examples/button/button-directive/button-directive.component";
import { ButtonOutlineComponent } from "./examples/button/button-outline/button-outline.component";
import { ButtonRoundedComponent } from "./examples/button/button-rounded/button-rounded.component";
import { ButtonRoundedOutlineComponent } from "./examples/button/button-rounded-outline/button-rounded-outline.component";
import { ButtonCurvedComponent } from "./examples/button/button-curved/button-curved.component";
import { ButtonCurvedOutlineComponent } from "./examples/button/button-curved-outline/button-curved-outline.component";
import { SelectBasicComponent } from "./examples/select/select-basic/select-basic.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AutocompleteBasicComponent } from "./examples/autocomplete/autocomplete-basic/autocomplete-basic.component";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AutocompleteWithTemplateComponent } from "./examples/autocomplete/autocomplete-with-template/autocomplete-with-template.component";
import { RangeSliderComponent } from "./examples/range-slider/range-slider/range-slider.component";
import { CurrencyPipe } from "@angular/common";
import { RangeSliderCurrencyComponent } from "./examples/range-slider/range-slider-currancy/range-slider-currency.component";
import { ProgressWizardComponent } from "./examples/progress/progress/progress-wizard.component";
import { RadioBasicsComponent } from "./examples/radio/radio-basics/radio-basics.component";
import { RadioInlineComponent } from "./examples/radio/radio-inline/radio-inline.component";
import { StepperBasicComponent } from "./examples/stepper/stepper-basic/stepper-basic.component";
import { ModalBasicComponent } from "./examples/modal/modal-basic/modal-basic.component";
import { ModalBasicExampleComponent } from "./examples/modal/modal-basic/modal-basic-example.component";
import { PopoverBasicComponent } from "./examples/popover/popover-basic/popover-basic.component";

@NgModule({
  declarations: [AppComponent,
    ButtonSolidComponent,
    ButtonClearComponent,
    ButtonDirectiveComponent,
    MlSideEffectsComponent,
    ThemeSwitcherComponent,
    ButtonOutlineComponent,
    ButtonRoundedComponent,
    ButtonRoundedOutlineComponent,
    ButtonCurvedComponent,
    ButtonCurvedOutlineComponent,
    SelectBasicComponent,
    AutocompleteBasicComponent,
    AutocompleteWithTemplateComponent,
    RangeSliderComponent,
    RangeSliderCurrencyComponent,
    ProgressWizardComponent,
    RadioBasicsComponent,
    RadioInlineComponent,
    StepperBasicComponent,
    ModalBasicComponent,
    ModalBasicExampleComponent,
    PopoverBasicComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FdsAngularModule,
    FormsModule,
    ReactiveFormsModule,
    FdsModalModule,
    RouterModule.forRoot([], { initialNavigation: "enabled", useHash: true})
  ],
  entryComponents: [
    ModalBasicExampleComponent
  ],
  providers: [CurrencyPipe],
  bootstrap: [AppComponent]
})
export class AppModule {
}
