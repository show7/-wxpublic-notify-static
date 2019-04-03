import axios from 'axios'

import Vue from 'vue'


export default{
  toggleNight: (params: any) => Vue.axios.post('/api/webwechat/quiet/mode', params)
}