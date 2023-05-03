import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from 'src/app/shared/components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/home/welcome', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () =>
      import(
        'src/app/application/components/app/app-module-routing.module'
      ).then((m) => m.AppModuleRoutingModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('src/app/application/components/login/login-routing.module').then(
        (m) => m.LoginRoutingModule
      ),
  },
  { path: '**', component: PageNotFoundComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
