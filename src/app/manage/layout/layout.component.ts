import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  isCollapsed = false;
  isReverseArrow = false;
  width = 210;

  constructor(private titleService: Title) {
  }

  ngOnInit() {
    this.titleService.setTitle('后台管理页面');
  }
}
