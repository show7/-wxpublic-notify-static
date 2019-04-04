import Vue from 'vue'



export default{
  searchPublic: (text: any) => Vue.axios.get('/api/webwechat/search', {params: {weChatName: text}}),
  recommandPublic: (params:object) => Vue.axios.post('/api/webwechat/recommend', params)
}