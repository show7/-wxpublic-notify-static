import {apiGet} from './api'

export default{
  getToggleNight: (params?: any) => apiGet('/api/webwechat/quiet/mode',params)
}