import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import {ThemeSwitcherComponent} from "./theme-switcher/theme-switcher.component";
import {ButtonModule} from "../components/button";

@NgModule({
  declarations: [AppComponent, ThemeSwitcherComponent],
  imports: [
    ButtonModule,
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
