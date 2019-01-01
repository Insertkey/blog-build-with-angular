import {fakeAsync, ComponentFixture, TestBed} from '@angular/core/testing';
import {LoginFormComponent} from './login-form.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {ReactiveFormsModule} from '@angular/forms';

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [LoginFormComponent],
      imports: [HttpClientTestingModule, RouterTestingModule, NgZorroAntdModule, ReactiveFormsModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
    expect(fixture.nativeElement.querySelector('form')).toBeTruthy();
  });


});
