import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MlButtonComponent } from './ml-button/ml-button.component';
import { MlButtonDirective } from './ml-button.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [MlButtonComponent, MlButtonDirective],
  exports: [MlButtonComponent, MlButtonDirective],
})
export class NgxMlFridayModule {}
