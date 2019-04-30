import {apiGet,apiPost} from './api'

export default{
  toggleNight: (params: any) => apiPost('/api/webwechat/quiet/mode', params)
}