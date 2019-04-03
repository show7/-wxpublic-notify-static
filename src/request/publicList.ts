import axios from 'axios'



export default{
  publicList: (params: object) => axios.get('/api/webwechat/subscribe/list', {params: params})
}