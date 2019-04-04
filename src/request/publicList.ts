import  Vue from 'vue'

const validateStatus = (status:number)=>status >= 200 && status < 300 || status == 700

export default{
  publicList: (params: object) => Vue.axios.get('/api/webwechat/subscribe/list', {params,validateStatus})
}