import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from "@angular/material/button";

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PrincipalNavBarComponent } from './principal-nav-bar/principal-nav-bar.component';

@NgModule({
  declarations: [PageNotFoundComponent, PrincipalNavBarComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
  ],
  exports: [PrincipalNavBarComponent],
  providers: [],
})
export class ShareModule {}
