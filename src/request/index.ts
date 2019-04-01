import axios from 'axios';


export const ajaxGet:any  = (url: string, params?: any) => axios.get(url).then((res) => res.data).catch((e: string) => console.error(e))

export const ajaxPost:any = (url:string ,params?: any) => axios.post(url, params).then((res) => res.data).catch((e: string) => console.error(e))

axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});