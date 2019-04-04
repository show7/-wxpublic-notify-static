import axios from 'axios'


const validateStatus = (status:number)=>status >= 200 && status < 300 || status == 700
export default{
  articleList: (params: object) => axios.get('/api/webwechat/article/list', {params,validateStatus}),
  openArticle: (params: object) => axios.post('/api/webwechat/article/open', {...params,validateStatus})
}