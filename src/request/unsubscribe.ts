import {apiPost} from './api'

export default{
  unsubscribe: (params: object) => apiPost('/api/webwechat/unsubscribe', params)
}