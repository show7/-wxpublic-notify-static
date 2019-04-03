import  Vue from 'vue'



export default{
  publicList: (params: object) => Vue.axios.get('/api/webwechat/subscribe/list', params)
}