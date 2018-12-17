import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'visiter', loadChildren: './visiter/visiter.module#VisiterModule' },
  { path: 'manage', loadChildren: './manage/manage.module#ManageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginModule' },
  { path: '', redirectTo: '/visiter/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
