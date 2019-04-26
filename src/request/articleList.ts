import {apiGet,apiPost} from './api'


const validateStatus = (status:number)=>status >= 200 && status < 300 || status == 700
export default{
  articleList: (params: object) => apiGet('/api/webwechat/article/list', params),
  openArticle: (params: object) => apiPost('/api/webwechat/article/open', {...params,validateStatus})
}