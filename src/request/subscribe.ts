import Vue from 'vue'

export default{
  subscribe: (params: any) => Vue.axios.post('/api/webwechat/subscribe', params)
}