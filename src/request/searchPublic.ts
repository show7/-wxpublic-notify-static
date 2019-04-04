import Vue from 'vue'


const validateStatus = (status:number)=>status >= 200 && status < 300 || status == 700
export default{
  searchPublic: (text: any) => Vue.axios.get('/api/webwechat/search', {params: {weChatName: text,validateStatus}}),
  recommandPublic: (params:object) => Vue.axios.post('/api/webwechat/recommend', params)
}