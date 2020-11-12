import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ButtonComponent } from "./button/button.component";
import { ButtonDirective } from "./button.directive";
import { DarkButtonComponent } from "./dark-button/dark-button.component";
import { AutocompleteComponent } from "./autocomplete/autocomplete.component";
import { InputDirective } from "./input/input.directive";
import { FormFieldComponent } from './form-field/form-field.component';
import { LabelDirective } from './label/label.component';
import { ErrorDirective } from "./form-field/error";
import { Template } from "./shared/template.directive";
import { ProgressComponent } from './progress/progress.component';
import { RangeSliderComponent } from './range-slider/range-slider.component';
import { FdsRadioButton, FdsRadioGroup } from "./radio/radio.component";
import { FdsHorizontalStepper, FdsStep, FdsStepper } from "./stepper/stepper";
import { FdsStepperNext, FdsStepperPrevious } from "./stepper/stepper-button";
import { TooltipDirective } from "./tooltip/fdsTooltip.directive";
import { PopoverDirective } from "./popover/fdsPopover.directive";

@NgModule({
  imports: [CommonModule],
  declarations: [ButtonComponent, ButtonDirective, DarkButtonComponent,
    AutocompleteComponent, Template,
    InputDirective, FormFieldComponent, LabelDirective, ErrorDirective,
    RangeSliderComponent, ProgressComponent, TooltipDirective, PopoverDirective,
    FdsStep, FdsStepper, FdsHorizontalStepper,
    FdsStepperNext, FdsStepperPrevious,
    FdsRadioButton, FdsRadioGroup
  ],
  exports: [ButtonComponent, ButtonDirective, DarkButtonComponent,
    AutocompleteComponent, Template,
    InputDirective, FormFieldComponent, LabelDirective, ErrorDirective,
    RangeSliderComponent, ProgressComponent, TooltipDirective, PopoverDirective,
    FdsStep, FdsStepper, FdsHorizontalStepper,
    FdsStepperNext, FdsStepperPrevious,
    FdsRadioButton, FdsRadioGroup,

  ]
})
export class FdsAngularModule {
}
