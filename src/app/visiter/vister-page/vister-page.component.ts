import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-vister-page',
  templateUrl: './vister-page.component.html',
  styleUrls: ['./vister-page.component.css']
})
export class VisterPageComponent implements OnInit {
  constructor(private titleService: Title) {
  }

  ngOnInit() {
    this.titleService.setTitle('造钥匙的人');
  }

}
