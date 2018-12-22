import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ROOT_URL} from '../app.config';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private getArticleNameUrl = ROOT_URL + 'api/file';

  constructor(private http: HttpClient) {
  }

  getArticleName(id) {
    this.http.get(this.getArticleNameUrl);
  }
}
