import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  constructor(private router: Router, private titleService: Title) {
  }

  ngOnInit() {
    this.titleService.setTitle('404-该页面不存在');
  }

  goToFrontEnd() {
    this.router.navigate(['/visiter']);
  }

}
