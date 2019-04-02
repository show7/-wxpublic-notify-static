import axios from 'axios'
let platform = 'we_mobile'
axios.defaults.headers.platform = platform
axios.defaults.headers.post['Content-Type'] = 'application/json'


export default{
  article: () => axios.get('/api/webwechat/subscribe/overview')
}