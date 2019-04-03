import axios from 'axios'



export default{
  getTypelist: (params?: any) => axios.get('/api/webwechat/category/list',params),
  getAllList: (params?: any) => axios.get('/api/webwechat/all/list',params)
}