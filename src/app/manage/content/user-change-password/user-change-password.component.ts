import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {Observable, Observer} from 'rxjs';
import {UserService} from '../../user.service';

@Component({
  selector: 'app-user-change-password',
  templateUrl: './user-change-password.component.html',
  styleUrls: ['./user-change-password.component.css'],
  providers: [UserService]
})
export class UserChangePasswordComponent implements OnInit {
  changePasswordForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService) {
  }

  ngOnInit() {
    this.changePasswordForm = this.fb.group({
      userName: ['', [Validators.required]],
      oldPassword: ['', [Validators.required]],
      newPassword: ['', [Validators.required]],
    });
  }

  submitForm = ($event, value) => {
    $event.preventDefault();
    for (const key in this.changePasswordForm.controls) {
      this.changePasswordForm.controls[key].markAsDirty();
      this.changePasswordForm.controls[key].updateValueAndValidity();
    }
    console.log(value);
    this.userService.changePassword(value);
  };

  resetForm(e: MouseEvent): void {
    e.preventDefault();
    this.changePasswordForm.reset();
    for (const key in this.changePasswordForm.controls) {
      this.changePasswordForm.controls[key].markAsPristine();
      this.changePasswordForm.controls[key].updateValueAndValidity();
    }
  }

}
