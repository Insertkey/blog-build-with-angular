import {Component, OnInit} from '@angular/core';
import {ManageService} from '../../manage/manage.service';
import {Response} from '../../app.config';
import {flyInOutAnimation} from '../../animations';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  animations: [flyInOutAnimation]
})
export class CategoryComponent implements OnInit {
  categoryList: any[];

  constructor(private manageService: ManageService) {
  }

  ngOnInit() {
    this.getCategoryList();
  }

  getCategoryList() {
    this.manageService.getAllCategoryList().subscribe((res: Response) => {
      this.categoryList = [...res.data];
    });
  }
}
