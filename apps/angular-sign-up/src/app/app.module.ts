import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { RouterModule } from "@angular/router";
import { ThemeSwitcherComponent } from './theme-switcher/theme-switcher.component';

@NgModule({
  declarations: [AppComponent, ThemeSwitcherComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: "sign-up", loadChildren: () => import("./sign-up/sign-up.module").then(m => m.SignUpModule) },
      { path: 'success', loadChildren: () => import('./success-page/success-page.module').then(m => m.SuccessPageModule) },
      { path: '**', redirectTo: '/sign-up', pathMatch: 'full' },
    ], { initialNavigation: "enabled" })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
