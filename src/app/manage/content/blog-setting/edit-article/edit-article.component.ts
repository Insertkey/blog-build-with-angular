import {Component, OnInit} from '@angular/core';
import {ArticleList, Response} from '../../../../app.config';
import {ManageService} from '../../../manage.service';
import {NzMessageService, NzModalRef, NzModalService} from 'ng-zorro-antd';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {
  articleList: ArticleList[];
  currentPageIndex: number;
  pageSize: number;
  confirmModal: NzModalRef;

  constructor(private mangeService: ManageService, private modal: NzModalService, private msg: NzMessageService) {
  }

  ngOnInit() {
    this.currentPageIndex = 1;
    this.pageSize = 10;
    this.getArticleList(this.currentPageIndex, this.pageSize);
  }

  getArticleList(page, size) {
    this.mangeService.getArticleList(page, size).subscribe((res: Response) => {
      this.articleList = [...res.data];
    });
  }

  pageIndexChange(e) {
    this.currentPageIndex = e;
    this.getArticleList(this.currentPageIndex, this.pageSize);
  }

  PageSizeChange(e) {
    this.pageSize = e;
    this.getArticleList(this.currentPageIndex, this.pageSize);
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
          this.getArticleList(this.currentPageIndex, this.pageSize);
        } else {
          this.msg.error(res.errMsg);
        }
      })
    });
  }

  editArticle(id) {
    // const modal = this.modal.create({
    //   nzTitle: '修改文章',
    //   nzContent: UploadArticleFormComponent,
    //   nzFooter: [
    //     {
    //       label: '取消',
    //       onClick: (componentInstance) => {
    //         componentInstance.instance.close();
    //       }
    //     },
    //     {
    //       label: '确定',
    //       type: 'primary',
    //       autoLoading: true,
    //       onClick: (componentInstance) => {
    //         componentInstance.instance.close();
    //       }
    //     }
    //   ]
    // });
    //
    // modal.afterClose.subscribe(() => {
    //   this.getArticleList(this.currentPageIndex, this.pageSize);
    // });
  }
}


