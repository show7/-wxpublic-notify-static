import {apiGet} from './api'

export default{
  classifylist: () => apiGet('/api/webwechat/load/guide/info')
}