import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './sign-up.component';
import { FdsAngularModule } from "@fds/angular";


const routes: Routes = [
  { path: '', component: SignUpComponent }
];

@NgModule({
  declarations: [SignUpComponent],
  imports: [
    CommonModule,
    FdsAngularModule,
    RouterModule.forChild(routes)
  ]
})
export class SignUpModule { }
