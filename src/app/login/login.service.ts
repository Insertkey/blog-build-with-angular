import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Response, ROOT_URL} from '../app.config';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loginUrl = ROOT_URL + 'api/user/login';

  constructor(private router: Router, private http: HttpClient) {
  }

  login(data) {
    return this.http.post<Response>(this.loginUrl, {
      'userName': data['userName'],
      'password': data['password']
    });
  }
}
