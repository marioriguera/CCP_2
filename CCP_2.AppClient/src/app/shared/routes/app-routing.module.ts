import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "src/app/application/components/app/app-component/app.component";
import { HomeComponent } from "src/app/application/components/app/home/home.component";
import { PageNotFoundComponent } from "src/app/application/components/app/page-not-found/page-not-found.component";
import { ForgottenPasswordComponent } from "src/app/application/components/login/forgotten-password/forgotten-password.component";
import { NewUserComponent } from "src/app/application/components/login/new-user/new-user.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: "full"},
  { path: 'home', component: HomeComponent , pathMatch: "full"},
  { path: 'new-user', component: NewUserComponent , pathMatch: "full"},
  { path: 'forgotten-password', component: ForgottenPasswordComponent , pathMatch: "full"},
  { path: '**', component: PageNotFoundComponent , pathMatch: "full"}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, { initialNavigation: "enabledBlocking" }),
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {}
