import {fakeAsync, ComponentFixture, TestBed} from '@angular/core/testing';
import {RegisterFormComponent} from './register-form.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {ReactiveFormsModule} from '@angular/forms';
import {NgZorroAntdModule} from 'ng-zorro-antd';

describe('RegisterFormComponent', () => {
  let component: RegisterFormComponent;
  let fixture: ComponentFixture<RegisterFormComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterFormComponent],
      imports: [HttpClientTestingModule, RouterTestingModule, ReactiveFormsModule, NgZorroAntdModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(RegisterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
    expect(fixture.nativeElement.querySelector('form')).toBeTruthy();
  });

  it('可以切换注册方式', () => {
    const comp = new RegisterFormComponent();
    expect(comp.isRegisterByPhone).toBe(true, '初始的注册方式是手机注册');
    comp.toggleRegisterMethod();
    expect(comp.isRegisterByPhone).toBe(false, '切换过后使用邮箱注册');
    comp.toggleRegisterMethod();
    expect(comp.isRegisterByPhone).toBe(true, '再次切换后使用手机注册');
  });
});
