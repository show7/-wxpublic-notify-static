import Vue from 'vue'

const validateStatus = (status:number)=>status >= 200 && status < 300 || status == 700
export default{
  subscribe: (params: any) => Vue.axios.post('/api/webwechat/subscribe', {...params,validateStatus})
}