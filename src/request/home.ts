import {apiGet} from './api'

export default{
  getTypelist: (params?: any) => apiGet('/api/webwechat/category/list',params),
  getAllList: (params?: any) => apiGet('/api/webwechat/all/list',params)
}