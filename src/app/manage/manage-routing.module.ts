import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LayoutComponent} from './layout/layout.component';
import {OverviewComponent} from './content/overview/overview.component';
import {BlogWritingComponent} from './content/blog-writing/blog-writing.component';
import {BlogSettingComponent} from './content/blog-setting/blog-setting.component';
import {UserInfoComponent} from './content/user-info/user-info.component';
import {UserChangePasswordComponent} from './content/user-change-password/user-change-password.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {path: 'overview', component: OverviewComponent},
      {path: 'writeBlog', component: BlogWritingComponent},
      {path: 'setBlog', component: BlogSettingComponent},
      {path: 'userInfo', component: UserInfoComponent},
      {path: 'changePassword', component: UserChangePasswordComponent},
      {path: '', redirectTo: 'overview', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageRoutingModule {
}
