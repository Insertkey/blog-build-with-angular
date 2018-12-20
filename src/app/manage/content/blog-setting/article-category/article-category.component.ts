import {Component, OnInit} from '@angular/core';
import {ManageService} from '../../../manage.service';
import {Response} from '../../../../app.config';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NzMessageService, NzModalRef, NzModalService} from 'ng-zorro-antd';

@Component({
  selector: 'app-article-category',
  templateUrl: './article-category.component.html',
  styleUrls: ['./article-category.component.css']
})
export class ArticleCategoryComponent implements OnInit {
  isOkLoading = false;
  isVisible = false;
  categoryList: any[];
  addCategoryForm: FormGroup;
  confirmModal: NzModalRef;

  constructor(private mangeService: ManageService, private fb: FormBuilder, private msg: NzMessageService, private modal: NzModalService) {
  }

  ngOnInit() {
    this.getCategoryList();
    this.addCategoryForm = this.fb.group({
      categoryName: ['', [Validators.required]]
    });
  }

  getCategoryList() {
    this.mangeService.getAllCategoryList().subscribe((res: Response) => {
      this.categoryList = [...res.data];
    });
  }

  handelOK(valid, data) {
    if (valid) {
      this.isOkLoading = true;
      this.mangeService.addCategory(data).subscribe((res: Response) => {
        if (res.success === true) {
          this.msg.create('success', '添加文章分类成功');
          this.isOkLoading = false;
          this.getCategoryList();
          setTimeout(() => {
            this.isVisible = false;
          }, 1000);
        } else {
          this.msg.create('error', res.errMsg);
          this.isOkLoading = false;
        }
      });
    }
  }

  handleDeleteCategory(id) {
    if (id) {
      this.confirmModal = this.modal.confirm({
        nzTitle: '确定要删除该文章分类吗?',
        nzOnOk: () => this.mangeService.deleteCategory(id).subscribe((res: Response) => {
          if (res.success === true) {
            this.msg.create('success', '删除成功');
            this.getCategoryList();
          } else {
            this.msg.create('error', res.errMsg);
          }
        })
      });
    }
  }

}
