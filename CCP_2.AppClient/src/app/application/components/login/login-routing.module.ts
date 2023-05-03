import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NewUserComponent } from './new-user/new-user.component';
import { ForgottenPasswordComponent } from './forgotten-password/forgotten-password.component';

const loginRoutes: Routes = [
  { path: 'enter-login', component: LoginComponent, pathMatch: 'full' },
  { path: 'new-user', component: NewUserComponent, pathMatch: 'full' },
  { path: 'forgotten-password', component: ForgottenPasswordComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(loginRoutes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
