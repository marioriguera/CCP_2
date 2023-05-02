import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { LoginComponent } from './login/login.component';
import { NewUserComponent } from './new-user/new-user.component';
import { ForgottenPasswordComponent } from './forgotten-password/forgotten-password.component';

@NgModule({
  declarations: [
    LoginComponent,
    NewUserComponent,
    ForgottenPasswordComponent
  ],
  imports: [
    CommonModule,
    MatSlideToggleModule,
  ]
})
export class LoginModule { }
