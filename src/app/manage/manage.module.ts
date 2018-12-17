import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgZorroAntdModule} from 'ng-zorro-antd';

import {ManageRoutingModule} from './manage-routing.module';
import {LayoutComponent} from './layout/layout.component';
import {NavHeaderComponent} from './nav-header/nav-header.component';
import {NavHeaderUserComponent} from './nav-header/nav-header-user/nav-header-user.component';
import {OverviewComponent} from './content/overview/overview.component';
import {UserInfoComponent} from './content/user-info/user-info.component';
import {UserChangePasswordComponent} from './content/user-change-password/user-change-password.component';
import {BlogSettingComponent} from './content/blog-setting/blog-setting.component';
import {BlogWritingComponent} from './content/blog-writing/blog-writing.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [LayoutComponent, NavHeaderComponent, NavHeaderUserComponent, OverviewComponent, UserInfoComponent, UserChangePasswordComponent, BlogSettingComponent, BlogWritingComponent],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    ReactiveFormsModule,
    ManageRoutingModule
  ]
})
export class ManageModule {
}
