import axios from 'axios'

const validateStatus = (status:number)=>status >= 200 && status < 300 || status == 700
export default{
  article: () => axios.get('/api/webwechat/subscribe/overview',{validateStatus})
}