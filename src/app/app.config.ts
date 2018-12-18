export const ROOT_URL = 'http://localhost:8082/';

export interface Response {
  success: boolean;
  errMsg: string;
  data: null | [object];
}
