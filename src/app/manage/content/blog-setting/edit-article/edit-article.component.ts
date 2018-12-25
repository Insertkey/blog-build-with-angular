import {Component, OnInit} from '@angular/core';
import {ArticleList, Response} from '../../../../app.config';
import {ManageService} from '../../../manage.service';
import {NzMessageService, NzModalRef, NzModalService} from 'ng-zorro-antd';
import {UpdateArticleFormComponent} from '../../../../share/update-article-form/update-article-form.component';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {
  articleList: ArticleList[];
  currentPageIndex: number;
  total: number;
  loading = true;
  pageSize: number;
  sortKey = null;
  sortValue = null;
  confirmModal: NzModalRef;

  constructor(private mangeService: ManageService, private modal: NzModalService, private msg: NzMessageService) {
  }

  ngOnInit() {
    this.currentPageIndex = 1;
    this.pageSize = 10;
    this.getArticleList();
  }

  getArticleList() {
    this.loading = true;
    this.mangeService.getArticleList(this.currentPageIndex, this.pageSize, this.sortKey, this.sortValue).subscribe((res: Response) => {
      this.articleList = [...res.data];
      this.total = res.option.total;
      this.loading = false;
    });
  }

  pageIndexChange(e) {
    this.currentPageIndex = e;
    this.getArticleList();
  }

  PageSizeChange(e) {
    this.pageSize = e;
    this.getArticleList();
  }

  sort(sort: { key: string, value: string }): void {
    this.sortKey = sort.key;
    this.sortValue = sort.value;
    this.getArticleList();
  }

  handleTableClick(id, method) {
    if (method === 'delete') {
      this.deleteArticle(id);
    } else if (method === 'edit') {
      this.editArticle(id);
    }
  }

  deleteArticle(id) {
    this.confirmModal = this.modal.confirm({
      nzTitle: '确定要删除该文章吗?',
      nzOnOk: () => this.mangeService.deleteArticle(id).subscribe((res: Response) => {
        if (res.success === true) {
          this.msg.success('删除成功');
          this.getArticleList();
        } else {
          this.msg.error(res.errMsg);
        }
      })
    });
  }

  editArticle(id) {
    const modal = this.modal.create({
      nzTitle: '修改文章',
      nzContent: UpdateArticleFormComponent,
      nzComponentParams: {articleId: id},
      nzFooter: [
        {
          label: '取消',
          onClick: (componentInstance) => {
            componentInstance.modalRef.close();
          }
        },
        {
          label: '确定',
          type: 'primary',
          autoLoading: true,
          onClick: (componentInstance) => {
            componentInstance.modalRef.close();
          }
        }
      ]
    });

    modal.afterClose.subscribe(() => {
      this.getArticleList();
    });
  }
}


