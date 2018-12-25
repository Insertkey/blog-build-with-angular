import {Component, OnInit} from '@angular/core';
import {NzMessageService, NzModalRef, UploadFile} from 'ng-zorro-antd';
import {HttpClient, HttpRequest, HttpResponse} from '@angular/common/http';
import {filter} from 'rxjs/operators';
import {Response, ROOT_URL} from '../../app.config';
import {ManageService} from '../../manage/manage.service';

@Component({
  selector: 'app-update-article-form',
  templateUrl: './update-article-form.component.html',
  styleUrls: ['./update-article-form.component.css']
})
export class UpdateArticleFormComponent implements OnInit {
  articleId: number;
  uploadUrl = ROOT_URL + 'api/file/update';
  uploading = false;
  showError = false;
  fileList: UploadFile[] = [];
  selectCategory: string;
  shortIntroduction: string;
  categoryList: any[];
  formStatus: string;

  constructor(private http: HttpClient, private msg: NzMessageService, private manageService: ManageService, public modalRef: NzModalRef) {
  }

  ngOnInit() {
    this.manageService.getAllCategoryList().subscribe((res: Response) => {
      this.categoryList = [...res.data];
    });
    this.articleId = (<any>this.modalRef).nzComponentParams.articleId;
    this.getArticleInfo(this.articleId);
  }

  getArticleInfo(id) {
    this.manageService.getArticleInfo(id).subscribe((res: Response) => {
      this.shortIntroduction = (<any>res.data).shortIntroduction;
      this.selectCategory = (<any>res.data).category;
    });
  }


  beforeUpload = (file: UploadFile): boolean => {
    if (/.*\.md/.test(file.name)) {
      this.fileList.push(file);
    } else {
      this.msg.error('只能上传markdown文件');
    }
    return false;
  };

  handleUpload(): void {
    if (this.selectCategory) {
      const formData = new FormData();
      this.fileList.forEach((file: any) => {
        formData.append('file', file);
        formData.append('id', this.articleId.toString());
        formData.append('categoryName', this.selectCategory);
        formData.append('shortIntroduction', this.shortIntroduction ? this.shortIntroduction : '');
      });
      this.uploading = true;
      const req = new HttpRequest('PUT', this.uploadUrl, formData, {});
      this.http
        .request(req)
        .pipe(filter(e => e instanceof HttpResponse))
        .subscribe(
          (res: HttpResponse<any>) => {
            this.uploading = false;
            try {
              if (res.body.success === true) {
                this.msg.success('更新成功');
                this.fileList = [];
              } else {
                this.msg.error(res.body.errMsg);
              }
            } catch (e) {
              console.error(e);
            }
          },
          err => {
            console.error(err);
            this.uploading = false;
            this.msg.error('上传失败');
          }
        );
    } else {
      this.formStatus = 'error';
      this.showError = true;
    }
  }
}


