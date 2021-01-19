import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { InputDirective } from './input/input.directive';
import { FormFieldComponent } from './form-field/form-field.component';
import { LabelDirective } from './label/label.component';
import { ErrorDirective } from './form-field/error';
import { Template, Header, Footer } from './shared/template.directive';
import { ProgressComponent } from './progress/progress.component';
import { RangeSliderComponent } from './range-slider/range-slider.component';
import { FdsRadioButton, FdsRadioGroup } from './radio/radio.component';
import { FdsHorizontalStepper, FdsStep, FdsStepper } from './stepper/stepper';
import { FdsStepperNext, FdsStepperPrevious } from './stepper/stepper-button';
import { FdsStepLabel } from './stepper/step-label';
import { FdsStepHeader } from './stepper/step-header';
import { TooltipDirective } from './tooltip/fdsTooltip.directive';
import { PopoverDirective } from './popover/fdsPopover.directive';
import { InputMaskComponent } from './input-mask/input-mask.component';
import { InputNumberComponent } from './input-number/input-number.component';
import { CardComponent } from './card/card.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ButtonComponent,
    AutocompleteComponent,
    Template,
    Header,
    Footer,
    InputDirective,
    FormFieldComponent,
    LabelDirective,
    ErrorDirective,
    RangeSliderComponent,
    ProgressComponent,
    TooltipDirective,
    PopoverDirective,
    FdsStep,
    FdsStepper,
    FdsHorizontalStepper,
    FdsStepLabel,
    FdsStepHeader,
    FdsStepperNext,
    FdsStepperPrevious,
    FdsRadioButton,
    FdsRadioGroup,
    InputMaskComponent,
    InputNumberComponent,
    CardComponent
  ],
  exports: [
    ButtonComponent,
    AutocompleteComponent,
    Template,
    Header,
    Footer,
    InputDirective,
    FormFieldComponent,
    LabelDirective,
    ErrorDirective,
    RangeSliderComponent,
    ProgressComponent,
    TooltipDirective,
    PopoverDirective,
    FdsStep,
    FdsStepper,
    FdsHorizontalStepper,
    FdsStepLabel,
    FdsStepHeader,
    FdsStepperNext,
    FdsStepperPrevious,
    FdsRadioButton,
    FdsRadioGroup,
    InputMaskComponent,
    InputNumberComponent,
    CardComponent
  ]
})
export class FdsLibAngularModule {}
