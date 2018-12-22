import {Component, Input, OnInit} from '@angular/core';
import {ArticleList} from '../../app.config';


@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.css']
})
export class ArticleCardComponent implements OnInit {
  @Input() article: ArticleList;

  constructor() {
  }

  ngOnInit() {
  }

}
