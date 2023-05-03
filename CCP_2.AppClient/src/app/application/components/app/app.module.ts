import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from 'src/app/shared/routes/app-routing.module';
import { LoginModule } from 'src/app/application/components/login/login.module';
import { ShareModule } from 'src/app/shared/components/share.module';

import { AppComponent } from 'src/app/application/components/app/app-component/app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LoginModule,
    ShareModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
