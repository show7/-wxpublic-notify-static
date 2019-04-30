import {apiGet} from './api'

export default{
  classifylist: () => apiGet('/api/webwechat/load/guide/info'),
  firstSubscribe:() => apiGet('/api/webwechat/subscribe/is/first')
}