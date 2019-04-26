import {apiGet,apiPost} from './api'

export default{
  searchPublic: (text: any) => apiGet('/api/webwechat/search', {params: {weChatName: text}}),
  recommandPublic: (params:object) => apiPost('/api/webwechat/recommend', params)
}