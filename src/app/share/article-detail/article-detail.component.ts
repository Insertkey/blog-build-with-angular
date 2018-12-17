import {Component, Input, OnInit} from '@angular/core';
import {ROOT_URL} from '../../app.config';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {
  @Input() articleId: string;
  articleUrl: string;

  constructor() {
  }

  ngOnInit() {
    this.articleUrl = ROOT_URL + 'markdownFile/' + this.articleId;
  }

}
