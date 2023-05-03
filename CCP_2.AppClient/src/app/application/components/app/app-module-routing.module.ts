import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "src/app/application/components/app/home/home.component";
import { AboutUsComponent } from "./about-us/about-us.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";

const appRoutes: Routes = [
  { path: 'welcome', component: HomeComponent , pathMatch: "full"},
  { path: 'about-us', component: AboutUsComponent , pathMatch: "full"},
  { path: 'contact-us', component: ContactUsComponent , pathMatch: "full"},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(appRoutes),
  ],
  exports: [RouterModule]
})

export class AppModuleRoutingModule {}
