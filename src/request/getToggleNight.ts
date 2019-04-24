import Vue from 'vue'


const validateStatus = (status:number)=>status >= 200 && status < 300 || status == 700
export default{
  getToggleNight: (params?: any) => Vue.axios.get('/api/webwechat/quiet/mode',{...params,validateStatus})
}