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
import { UpdateArticleFormComponent } from './update-article-form/update-article-form.component';
import {FormsModule} from '@angular/forms';

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
  declarations: [ArticleDetailComponent, ArticleCardComponent, FormatDatePipe, UpdateArticleFormComponent],
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
    FormsModule,
    NgZorroAntdModule,
    RouterModule
  ],
  exports: [
    FormatDatePipe,
    ArticleDetailComponent,
    ArticleCardComponent,
    UpdateArticleFormComponent
  ]
})
export class ShareModule {
}
