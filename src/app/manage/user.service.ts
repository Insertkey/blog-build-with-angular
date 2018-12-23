import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Response, ROOT_URL} from '../app.config';
import {NzMessageService} from 'ng-zorro-antd';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  redirectUrl: string;

  private loginUrl = ROOT_URL + 'api/user/login';
  private changePasswordUrl = ROOT_URL + 'api/user/change';
  private isUserExistUrl = ROOT_URL + 'api/user/exist';

  constructor(private http: HttpClient, private msg: NzMessageService) {
  }

  getIsLoggedIn(): boolean {
    const result = sessionStorage.getItem('isLoggedIn');
    if (result === 'true') {
      return true;
    } else {
      return false;
    }
  }

  setIsLoggedIn(val: boolean):void {
    sessionStorage.setItem('isLoggedIn', val.toString());
  }

  login(data) {
    return this.http.post(this.loginUrl, {
      'userName': data['userName'],
      'password': data['password']
    });
  }

  logout(): void {
    this.setIsLoggedIn(false);
  }

  changePassword(data) {
    return this.http.put(this.changePasswordUrl, data).subscribe((res: Response) => this.handelChangePasswordResponse(res));
  }

  handelChangePasswordResponse(res) {
    if (res.success === true) {
      this.msg.create('success', '修改密码成功');
    } else {
      this.msg.create('error', res.errMsg);
    }
  }

  handelUserExist(data) {
    return this.http.post<Response>(this.isUserExistUrl, data);
  }
}
