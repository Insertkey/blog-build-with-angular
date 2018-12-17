import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { LoginRoutingModule } from './login-routing.module';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterFormComponent } from './register-form/register-form.component';

@NgModule({
  declarations: [LoginFormComponent, LoginPageComponent, RegisterFormComponent],
  imports: [
    FormsModule,
    CommonModule,
    NgZorroAntdModule,
    ReactiveFormsModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
