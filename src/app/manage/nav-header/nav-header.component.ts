import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.css']
})
export class NavHeaderComponent implements OnInit {
  @Output() gotoSomeWhere = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  gotoWriteBlog() {
    this.gotoSomeWhere.emit('writeBlog');
  }
}
