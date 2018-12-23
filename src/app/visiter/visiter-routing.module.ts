import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {VisterPageComponent} from './vister-page/vister-page.component';
import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';
import {CategoryComponent} from './category/category.component';
import {ArticleDetailComponent} from '../share/article-detail/article-detail.component';

const routes: Routes = [
  {
    path: '',
    component: VisterPageComponent,
    children: [
      {path: 'about', component: AboutComponent},
      {path: 'category', component: CategoryComponent},
      {path: 'home', component: HomeComponent},
      {path: 'article/:id', component: ArticleDetailComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisiterRoutingModule {
}
