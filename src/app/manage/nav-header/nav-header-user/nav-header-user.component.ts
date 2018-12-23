import {Component, OnInit} from '@angular/core';
import {UserService} from '../../user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav-header-user',
  templateUrl: './nav-header-user.component.html',
  styleUrls: ['./nav-header-user.component.css']
})
export class NavHeaderUserComponent implements OnInit {
  settings = {
    user: {
      name: 'matrix',
      avatar: './sdf'
    }
  };

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit() {
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['/login']);
  }

}
