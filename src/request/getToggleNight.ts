import axios from 'axios'



export default{
  getToggleNight: (params?: any) => axios.get('/api/webwechat/quiet/mode')
}