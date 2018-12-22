import {Component, OnInit} from '@angular/core';
import {ArticleList, Response} from '../../app.config';
import {ManageService} from '../../manage/manage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  articleList: ArticleList[];
  currentPageIndex: number;
  totalAmount: number;
  pageSize: number;

  constructor(private manageService: ManageService) {
  }

  ngOnInit() {
    this.currentPageIndex = 1;
    this.pageSize = 5;
    this.getArticleList();
  }

  // 按照最近修改时间排序
  getArticleList() {
    this.manageService.getArticleList(this.currentPageIndex, this.pageSize, 'lastEditTime', 'descend').subscribe((res: Response) => {
        this.articleList = [...res.data];
        this.totalAmount = res.option.total;
      }
    );
  }

  handelPageSizeChange(e) {
    this.currentPageIndex = e;
    this.getArticleList();
  }
}
