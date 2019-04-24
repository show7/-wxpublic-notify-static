import Vue from 'vue'

const validateStatus = (status:number)=>status >= 200 && status < 300 || status == 700
export default{
  article: () => Vue.axios.get('/api/webwechat/subscribe/overview',{validateStatus})
}