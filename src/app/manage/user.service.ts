import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Response, ROOT_URL} from '../app.config';
import {NzMessageService} from 'ng-zorro-antd';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  changePasswordUrl = ROOT_URL + 'api/user/change';

  constructor(private http: HttpClient, private msg: NzMessageService) {
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
}
