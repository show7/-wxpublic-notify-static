import Vue from 'vue'

const validateStatus = (status:number)=>status >= 200 && status < 300 || status == 700
export default{
  toggleNight: (params: any) => Vue.axios.post('/api/webwechat/quiet/mode', {...params,validateStatus})
}