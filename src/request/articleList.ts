import axios from 'axios'



export default{
  articleList: (params: object) => axios.get('/api/webwechat/article/list', {params: params})
}