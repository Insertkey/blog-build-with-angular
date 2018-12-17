import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  isLogin = true;

  constructor() { }

  ngOnInit() {
  }
  toggleStatus(): void {
    this.isLogin = !this.isLogin;
  }
}
