import {TestBed} from '@angular/core/testing';

import {LoginService} from './login.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';

describe('LoginService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule, RouterTestingModule],
  }));

  it('should be created', () => {
    const service: LoginService = TestBed.get(LoginService);
    expect(service).toBeTruthy();
  });

  it('能够发送请求', () => {
    const service: LoginService = TestBed.get(LoginService);
    const mockUserData = {userName: 'matrix', password: 12345659};
    expect(service.login(mockUserData)).toBeTruthy();
  });
});
