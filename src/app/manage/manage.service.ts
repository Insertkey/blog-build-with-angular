import {Injectable} from '@angular/core';
import {ROOT_URL} from '../app.config';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ManageService {
  private findAllTagsUrl = ROOT_URL + 'api/tag/all';
  private addTagUrl = ROOT_URL + 'api/tag/add';
  private deleteTagUrl = ROOT_URL + 'api/tag/';
  private getAllCategoryListUrl = ROOT_URL + 'api/category/list';
  private addCategoryUrl = ROOT_URL + 'api/category/add';
  private deleteCategoryUrl = ROOT_URL + 'api/category/';
  private getArticleListUrl = ROOT_URL + 'api/file/list';
  private deleteArticleUrl = ROOT_URL + 'api/file/';

  constructor(private http: HttpClient) {
  }

  findAllTags() {
    return this.http.get(this.findAllTagsUrl);
  }

  addTag(data) {
    return this.http.post(this.addTagUrl, data);
  }

  deleteTag(id) {
    return this.http.delete(this.deleteTagUrl + id);
  }

  getAllCategoryList() {
    return this.http.get(this.getAllCategoryListUrl);
  }

  addCategory(data) {
    return this.http.post(this.addCategoryUrl, data);
  }

  deleteCategory(id) {
    return this.http.delete(this.deleteCategoryUrl + id);
  }

  getArticleList(page, size) {
    return this.http.get(this.getArticleListUrl, {params: {'page': page, 'size': size}});
  }

  deleteArticle(id) {
    return this.http.delete(this.deleteArticleUrl + id);
  }
}
