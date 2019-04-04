import  Vue from 'vue'



export default{
  publicList: (params: object) => Vue.axios.get('/api/webwechat/subscribe/list', {params: params, validateStatus: function (status) {
    return status >= 200 && status < 300 || status == 700
  }})
}