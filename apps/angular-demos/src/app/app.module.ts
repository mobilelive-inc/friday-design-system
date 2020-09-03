import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import {NgxMlFridayModule} from "@nx-hybrid-demo/ngx-ml-friday";
import { MlButtonSolidComponent } from './ml-button-solid/ml-button-solid.component';
import { MlButtonClearComponent } from './ml-button-clear/ml-button-clear.component';
import { MlButtonDirectiveComponent } from './ml-button-directive/ml-button-directive.component';

@NgModule({
  declarations: [AppComponent, MlButtonSolidComponent, MlButtonClearComponent, MlButtonDirectiveComponent],
  imports: [
    BrowserModule,
    NgxMlFridayModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
