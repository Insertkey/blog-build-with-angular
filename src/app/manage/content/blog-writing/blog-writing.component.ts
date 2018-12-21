import {Component, OnInit} from '@angular/core';
import {Response, ROOT_URL} from '../../../app.config';
import {NzMessageService, UploadFile} from 'ng-zorro-antd';
import {HttpClient, HttpRequest, HttpResponse} from '@angular/common/http';
import {filter} from 'rxjs/operators';
import {ManageService} from '../../manage.service';

@Component({
  selector: 'app-blog-writing',
  templateUrl: './blog-writing.component.html',
  styleUrls: ['./blog-writing.component.css']
})
export class BlogWritingComponent implements OnInit {
  uploadUrl = ROOT_URL + 'api/file/upload';
  uploading = false;
  showError = false;
  fileList: UploadFile[] = [];
  selectCategory: string;
  shortIntroduction: string;
  categoryList: any[];
  formStatus: string;

  constructor(private http: HttpClient, private msg: NzMessageService, private manageService: ManageService) {
  }

  ngOnInit() {
    this.manageService.getAllCategoryList().subscribe((res: Response) => {
      this.categoryList = [...res.data];
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
        formData.append('category', this.selectCategory);
        formData.append('shortIntroduction', this.shortIntroduction ? this.shortIntroduction : '');
      });
      this.uploading = true;
      const req = new HttpRequest('POST', this.uploadUrl, formData, {});
      this.http
        .request(req)
        .pipe(filter(e => e instanceof HttpResponse))
        .subscribe(
          (res) => {
            this.uploading = false;
            try {
              // if (res.body.success === true) {
              //   this.msg.success('上传成功');
              //   this.fileList = [];
              // } else {
              //   this.msg.error(res.body.errMsg);
              // }
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
