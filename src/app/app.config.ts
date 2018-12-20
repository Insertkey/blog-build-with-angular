// 根路径，部署的时候需要更改
export const ROOT_URL = 'http://localhost:8082/';

// ajax请求响应格式接口
export interface Response {
  success: boolean;
  errMsg: string;
  data: null | any[];
  option?: any[];
}

// articleList接口,可能会多出用到
export interface ArticleList {
  id: number;
  shortIntroduction: string;
  articleName: string;
  createTime: number;
  lastEditTime: number;
  category: any;
}
