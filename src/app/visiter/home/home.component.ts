import {Component, OnInit} from '@angular/core';
import {ArticleList, Response} from '../../app.config';
import {ManageService} from '../../manage/manage.service';
import {animate, query, stagger, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [trigger('articleCardFlyIn', [
    transition(':enter', [
      query('li', [
        style({opacity: 0, transform: 'translateY(-100px)'}),
        stagger(120, [
          animate('500ms cubic-bezier(0.35, 0, 0.25, 1)', style({opacity: 1, transform: 'none'}))
        ])
      ])
    ])
  ])]
})
export class HomeComponent implements OnInit {
  articleList: ArticleList[];
  currentPageIndex: number;
  totalAmount: number;
  pageSize: number;
  isDateReady = false;

  constructor(private manageService: ManageService) {
  }

  ngOnInit() {
    this.currentPageIndex = 1;
    this.pageSize = 5;
    this.getArticleList();
  }

  // 按照最近修改时间排序
  getArticleList() {
    this.isDateReady = false;
    this.manageService.getArticleList(this.currentPageIndex, this.pageSize, 'lastEditTime', 'descend').subscribe((res: Response) => {
        this.articleList = [...res.data];
        this.totalAmount = res.option.total;
      }, (error) => {
        console.error(error);
      }, () => {
        this.isDateReady = true;
      }
    );
  }

  handelPageSizeChange(e) {
    this.currentPageIndex = e;
    this.getArticleList();
  }
}
