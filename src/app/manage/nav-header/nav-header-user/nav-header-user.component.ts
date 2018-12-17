import {Component, OnInit} from '@angular/core';

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

  constructor() {
  }

  ngOnInit() {
  }

}
