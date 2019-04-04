import Vue from 'vue'
const validateStatus = (status:number)=>status >= 200 && status < 300 || status == 700
export default{
  getTypelist: (params?: any) => Vue.axios.get('/api/webwechat/category/list',{params,validateStatus}),
  getAllList: (params?: any) => Vue.axios.get('/api/webwechat/all/list',{params,validateStatus})
}