import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  isLogin = true;

  constructor(private titleService: Title) {
  }

  ngOnInit() {
    this.titleService.setTitle('登录');
  }

  toggleStatus(): void {
    this.isLogin = !this.isLogin;
  }
}
