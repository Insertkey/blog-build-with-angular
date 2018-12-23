import {Component, Input, OnInit} from '@angular/core';
import {ROOT_URL} from '../../app.config';
import {ActivatedRoute, Params} from '@angular/router';
import {flyInOutAnimation} from '../../animations';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css'],
  animations: [flyInOutAnimation]
})
export class ArticleDetailComponent implements OnInit {
  articleFullName: string;
  articleUrl: string;
  anchorList: string[];

  constructor(private routeInfo: ActivatedRoute) {
  }

  ngOnInit() {
    // 正常来说这里应该拿articleId去请求article的存储路径，但是在之前的请求已经得到路径，为了减少请求，这里直接拿来用
    this.routeInfo.params.subscribe((params: Params) => {
      this.articleFullName = params.articleName + '.md';
      this.articleUrl = ROOT_URL + 'markdownFile/' + this.articleFullName;
      console.log(this.articleUrl);
    });
    this.anchorList = [];
  }

  // markdown转换完毕后的回调函数，这时可查询页面上的DOM元素
  onLoad() {
    document.querySelectorAll('h2').forEach((item) => {
      const id = item.innerHTML;
      item.setAttribute('id', id);
      this.anchorList.push(id);
    });
  }

}
