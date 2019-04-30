import {apiGet,apiPost} from './api'

export default{
  subscribe: (params: any) => apiPost('/api/webwechat/subscribe', params)
}