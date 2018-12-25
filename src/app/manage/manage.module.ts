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
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ArticleTagComponent} from './content/blog-setting/article-tag/article-tag.component';
import {EditArticleComponent} from './content/blog-setting/edit-article/edit-article.component';
import {ArticleCategoryComponent} from './content/blog-setting/article-category/article-category.component';
import {ShareModule} from '../share/share.module';
import {UpdateArticleFormComponent} from '../share/update-article-form/update-article-form.component';

@NgModule({
  declarations: [
    LayoutComponent,
    NavHeaderComponent,
    NavHeaderUserComponent,
    OverviewComponent,
    UserInfoComponent,
    UserChangePasswordComponent,
    BlogSettingComponent,
    BlogWritingComponent,
    ArticleTagComponent,
    EditArticleComponent,
    ArticleCategoryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ShareModule,
    NgZorroAntdModule,
    ReactiveFormsModule,
    ManageRoutingModule
  ],
  entryComponents: [UpdateArticleFormComponent]
})
export class ManageModule {
}
