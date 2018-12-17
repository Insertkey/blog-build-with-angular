import {Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy} from '@angular/core';
import {
  FormBuilder, FormControl,
  FormGroup, ValidationErrors,
  Validators
} from '@angular/forms';
import {LoginService} from '../login.service';
import {Router} from '@angular/router';
import {Observable, Observer} from 'rxjs';
import {Response} from '../../app.config';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [LoginService]
})

export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;
  isLogging = false;

  constructor(private router: Router, private fb: FormBuilder, private loginService: LoginService, private ref: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userName: [localStorage.getItem('userName'), [Validators.required], [this.userNameAsyncValidator]],
      password: [null, [Validators.required], [this.passwordAsyncValidator]],
      remember: [true]
    });

  }

  submitForm(): void {
    this.isLogging = true;
    this.ref.detectChanges(); // 手动检测变更
    this.loginService.login(this.loginForm.value)
      .subscribe(
        (res: Response) => {
          this.isLogging = false;
          if (res.success === true) {
            if (this.loginForm.value.remember === true) {
              localStorage.setItem('userName', this.loginForm.value.userName); // 如果勾选了记住账号，登陆成功后将账号存入LocalStorage
            } else {
              localStorage.removeItem('userName'); // 未勾选账号，登录成功后清除LocalStorage
            }
            this.router.navigate(['/manage']);
          } else {
            this.isLogging = false;
            this.ref.detectChanges(); // 手动检测变更
          }
        },
        error => console.error(error)
      );
  }

  userNameAsyncValidator = (control: FormControl) => Observable.create((observer: Observer<ValidationErrors>) => {
    setTimeout(() => {
      const length = control.value.toString().length;
      if (length < 6) {
        observer.next({error: true, shorterThanExpected: true});
      } else if (length > 12) {
        observer.next({error: true, longerThanExpected: true});
      } else if (control.value.toString().charAt(0) <= 'A' || control.value.toString().charAt(0) >= 'Z') {
        observer.next({error: true, notStartWithUppercase: true});
      } else {
        observer.next(null);
      }
      observer.complete();
    }, 500);
  });

  passwordAsyncValidator = (control: FormControl) => Observable.create((observer: Observer<ValidationErrors>) => {
    setTimeout(() => {
      const length = control.value.toString().length;
      if (length < 8) {
        observer.next({error: true, shorterThanExpected: true});
      } else if (length > 16) {
        observer.next({error: true, longerThanExpected: true});
      } else {
        observer.next(null);
      }
      observer.complete();
    }, 500);
  });

}
