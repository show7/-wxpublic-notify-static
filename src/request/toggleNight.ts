import axios from 'axios'



export default{
  toggleNight: (params: any) => axios.post('/api/webwechat/quiet/mode', params)
}