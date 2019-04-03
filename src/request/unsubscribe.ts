import axios from 'axios'



export default{
  unsubscribe: (params: object) => axios.post('/api/webwechat/unsubscribe', params)
}