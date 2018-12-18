import {Component, OnInit} from '@angular/core';
import {ManageService} from '../../../manage.service';
import {Response} from '../../../../app.config';
import {NzMessageService} from 'ng-zorro-antd';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-article-tag',
  templateUrl: './article-tag.component.html',
  styleUrls: ['./article-tag.component.css'],
  providers: [ManageService]
})
export class ArticleTagComponent implements OnInit {
  isVisible = false;
  isOkLoading = false;
  tagList: any[];
  addTagForm: FormGroup;

  constructor(private manageService: ManageService, private msg: NzMessageService, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.findAllTags();
    this.addTagForm = this.fb.group({
      tagName: ['', [Validators.required, Validators.maxLength(8)]],
      color: ['', [Validators.required, Validators.pattern(/^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/)]]
    });
  }

  findAllTags() {
    this.manageService.findAllTags().subscribe((res: Response) => {
      this.tagList = [...res.data];
    });
  }

  handleSure(valid, data) {
    if (valid) {
      this.manageService.addTag(data).subscribe((res: Response) => {
        if (res.success === true) {
          this.msg.create('success', '添加标签成功');
          this.isOkLoading = false;
          this.isVisible = false;
          this.findAllTags();
        } else {
          this.msg.create('error', '添加失败，请稍后再试');
          this.isOkLoading = false;
          this.isVisible = false;
        }
      });
    }
  }

  handleTableClick(id, method) {
    if (method === 'delete') {
      this.manageService.deleteTag(id).subscribe((res: Response) => {
          if (res.success === true) {
            this.msg.create('success', '删除成功');
            this.findAllTags();
          } else {
            this.msg.create('error', res.errMsg);
          }
        },
        (error) => {
          this.msg.create('error', error);
        });
    } else if (method === 'edit') {
      this.msg.create('success', `修改标签,id为${id}`);
    }
  }

}
