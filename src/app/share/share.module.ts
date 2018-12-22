import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ArticleDetailComponent} from './article-detail/article-detail.component';
import {MarkdownModule, MarkedOptions, MarkedRenderer} from 'ngx-markdown';
import {HttpClient} from '@angular/common/http';
import {MatButtonModule, MatCardModule} from '@angular/material';
import {ArticleCardComponent} from './article-card/article-card.component';
import {FormatDatePipe} from './pipe/format-date.pipe';
import {RouterModule} from '@angular/router';
import {NgZorroAntdModule} from 'ng-zorro-antd';

export function markedOptions(): MarkedOptions {
  const renderer = new MarkedRenderer();

  renderer.blockquote = (text: string) => {
    return '<blockquote class="blockquote"><p>' + text + '</p></blockquote>';
  };

  return {
    renderer: renderer,
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
  };
}

@NgModule({
  declarations: [ArticleDetailComponent, ArticleCardComponent, FormatDatePipe],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MarkdownModule.forRoot({
      loader: HttpClient,
      markedOptions: {
        provide: MarkedOptions,
        useFactory: markedOptions,
      }
    }),
    NgZorroAntdModule,
    RouterModule
  ],
  exports: [
    FormatDatePipe,
    ArticleDetailComponent,
    ArticleCardComponent
  ]
})
export class ShareModule {
}
