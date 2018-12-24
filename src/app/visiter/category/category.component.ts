import {Component, OnInit} from '@angular/core';
import {ManageService} from '../../manage/manage.service';
import {ArticleList, Response} from '../../app.config';
import {listFlyInAnimation} from '../../animations';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  animations: [listFlyInAnimation]
})
export class CategoryComponent implements OnInit {
  categoryList: any[];
  articleList: ArticleList[];
  isCategoryState = true;
  currentCategory = '';
  isCategoryDataReady = false;
  isArticleDataReady = false;

  constructor(private manageService: ManageService) {
  }

  ngOnInit() {
    this.getCategoryList();
  }

  handleCategoryListClick(id, category) {
    this.isCategoryState = false;
    this.currentCategory = category;
    this.manageService.getArticleListWithCategory(id).subscribe((res: Response) => {
      this.articleList = [...res.data];
    }, (error) => {
      console.error(error);
    }, () => {
      this.isArticleDataReady = true;
    });
  }

  getCategoryList() {
    this.manageService.getAllCategoryList().subscribe((res: Response) => {
      this.categoryList = [...res.data];
    }, (error) => {
      console.error(error);
    }, () => {
      this.isCategoryDataReady = true;
    });
  }


}
