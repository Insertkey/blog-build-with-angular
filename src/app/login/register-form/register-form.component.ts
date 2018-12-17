import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {interval} from 'rxjs';
import {take} from 'rxjs/operators';
import {NzMessageService} from 'ng-zorro-antd';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  isRegisterByPhone = true;
  buttonMsg = '获取验证码';
  isWaiting = false;
  RegisterForm: FormGroup;

  constructor(private fb: FormBuilder, private msg: NzMessageService) {
  }

  ngOnInit(): void {
    this.RegisterForm = this.fb.group({
      phone: ['', [Validators.required, Validators.pattern(/^1\d{10}$/)]],
      mail: ['', [Validators.required, Validators.email]],
      verificationCode: ['', [Validators.required, Validators.pattern(/^\d{6}$/)]]
    });
  }

  toggleRegisterMethod() {
    this.isRegisterByPhone = !this.isRegisterByPhone;
  }

  submitForm(): void {
    for (const i in this.RegisterForm.controls) {
      this.RegisterForm.controls[i].markAsDirty();
      this.RegisterForm.controls[i].updateValueAndValidity();
    }
  }

  getVerificationCode(isRegisterByPhone: boolean) {
    if (isRegisterByPhone) {
      this.msg.create('success', '已发送验证码到您的手机，请注意查收');
    } else {
      this.msg.create('success', '已发送验证码到您的邮箱，请注意查收');
    }
    this.isWaiting = true;
    const ob = interval(1000).pipe(take(60));
    ob.subscribe(i => this.buttonMsg = `等待${59 - i}s`,
      () => {
      },
      () => {
        this.isWaiting = false;
        this.buttonMsg = '获取验证码';
      });
  }
}
