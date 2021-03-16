import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SuccessPageComponent } from './success-page.component';
import { FdsLibAngularModule } from "@fds/angular";


const routes: Routes = [
  { path: '', component: SuccessPageComponent }
];

@NgModule({
  declarations: [SuccessPageComponent],
  imports: [
    CommonModule,
    FdsLibAngularModule,
    RouterModule.forChild(routes)
  ]
})
export class SuccessPageModule { }
