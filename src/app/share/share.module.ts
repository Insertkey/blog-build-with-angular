import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ArticleDetailComponent} from './article-detail/article-detail.component';
import {MarkdownModule, MarkedOptions, MarkedRenderer} from 'ngx-markdown';
import {HttpClient} from '@angular/common/http';

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
  declarations: [ArticleDetailComponent],
  imports: [
    CommonModule,
    MarkdownModule.forRoot({
      loader: HttpClient,
      markedOptions: {
        provide: MarkedOptions,
        useFactory: markedOptions,
      }
    })
  ],
  exports: [
    ArticleDetailComponent
  ]
})
export class ShareModule {
}
