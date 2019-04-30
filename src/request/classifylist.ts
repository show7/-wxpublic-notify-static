import {apiGet} from './api'

export default{
  classifylist: (type?:any) => apiGet('/api/webwechat/load/guide/info',type),
  firstSubscribe:() => apiGet('/api/webwechat/subscribe/is/first')
}