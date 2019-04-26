import {apiGet} from './api'

export default{
  article: () => apiGet('/api/webwechat/subscribe/overview')
}