import Vue from 'vue'

export default{
  getTypelist: (params?: any) => Vue.axios.get('/api/webwechat/category/list',params),
  getAllList: (params?: any) => Vue.axios.get('/api/webwechat/all/list',params)
}