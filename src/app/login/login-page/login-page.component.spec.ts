import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LoginPageComponent} from './login-page.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {ReactiveFormsModule} from '@angular/forms';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {LoginFormComponent} from '../login-form/login-form.component';
import {RegisterFormComponent} from '../register-form/register-form.component';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginPageComponent, LoginFormComponent, RegisterFormComponent],
      imports: [HttpClientTestingModule, RouterTestingModule, ReactiveFormsModule, NgZorroAntdModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('可以切换登录注册状态', () => {
    const comp = new LoginPageComponent();
    expect(comp.isLogin).toBe(true, '页面初始化后是登录表单状态');
    comp.toggleStatus();
    expect(comp.isLogin).toBe(false, '点击可以切换成注册表单');
    comp.toggleStatus();
    expect(comp.isLogin).toBe(true, '再次点击又切换回登录表单');
  });
});
