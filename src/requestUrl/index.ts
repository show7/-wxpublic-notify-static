import * as Request from '../request';
interface Params {
  headers?: object,
  params?: object
}
export const getData = (params?: Params) => Request.ajaxGet('/home')