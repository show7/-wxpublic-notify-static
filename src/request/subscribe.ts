import axios from 'axios'



export default{
  subscribe: (params: any) => axios.post('/api/webwechat/subscribe', params)
}