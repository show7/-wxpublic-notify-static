import axios from 'axios'



export default{
  searchPublic: (text: any) => axios.get('/api/webwechat/search', {params: {weChatName: text}})
}