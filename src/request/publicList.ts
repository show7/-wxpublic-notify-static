import {apiGet} from './api'

export default{
  publicList: (params: object) => apiGet('/api/webwechat/subscribe/list', params)
}