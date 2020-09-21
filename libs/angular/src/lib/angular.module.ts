import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { ButtonDirective } from './button.directive';
import { DarkButtonComponent } from './dark-button/dark-button.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { PopoverComponent } from './popover/popover.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ButtonComponent, ButtonDirective, DarkButtonComponent, TooltipComponent, PopoverComponent],
  exports: [ButtonComponent, ButtonDirective, DarkButtonComponent, TooltipComponent, PopoverComponent],
})
export class FdsAngularModule {}
