import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from 'src/app/shared/routes/app-routing.module';
import { LoginModule } from 'src/app/application/components/login/login.module';

import { AppComponent } from 'src/app/application/components/app/app-component/app.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { HomeComponent } from '../home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
