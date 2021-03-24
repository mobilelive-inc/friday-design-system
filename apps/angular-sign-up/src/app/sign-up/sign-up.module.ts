import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './sign-up.component';
import { FdsLibAngularModule } from '@fds/angular';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [{ path: '', component: SignUpComponent }];

@NgModule({
  declarations: [SignUpComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FdsLibAngularModule,
    RouterModule.forChild(routes)
  ]
})
export class SignUpModule {}
