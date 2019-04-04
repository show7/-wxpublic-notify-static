
import Vue from "vue"

const validateStatus = (status:number)=>status >= 200 && status < 300 || status == 700
export default{
  unsubscribe: (params: object) => Vue.axios.post('/api/webwechat/unsubscribe', {...params,validateStatus})
}