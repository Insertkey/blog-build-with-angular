import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule} from 'ng-zorro-antd';

import { VisiterRoutingModule } from './visiter-routing.module';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { VisterPageComponent } from './vister-page/vister-page.component';
import { HomeComponent } from './home/home.component';
import {AboutComponent} from './about/about.component';
import { CategoryComponent } from './category/category.component';
import {ShareModule} from '../share/share.module';

@NgModule({
  declarations: [VisterPageComponent, AboutComponent, HomeComponent, CategoryComponent],
  imports: [
    CommonModule,
    VisiterRoutingModule,
    ShareModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    NgZorroAntdModule
  ]
})
export class VisiterModule { }
