import {Component, Input, OnInit} from '@angular/core';
import {ROOT_URL} from '../../app.config';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
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
    });
    this.anchorList = [];
    setTimeout(() => {
      document.querySelectorAll('h2').forEach((item) => {
        this.anchorList.push(item.getAttribute('id'));
      });
    }, 2000);
  }

}
