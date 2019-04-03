import axios from 'axios';
import Vue from 'vue'
import TYPES from '../store/types'
import VueAxios from 'vue-axios';
Vue.use(VueAxios,axios)
let platform = 'we_mobile'
Vue.axios.defaults.headers.platform = platform
Vue.axios.defaults.headers.post['Content-Type'] = 'application/json'
Vue.axios.interceptors.response.use(
  (response: any) => {
    console.log('9999999')
    if (response.status === 700) {
      window.location.href = decodeURI(`${window.location.protocol}//${window.location.host}/wx/oauth/auth/10?callbackUrl=`) + encodeURIComponent(window.location.href)
    } else {
      return response.data
    }
  },
  function(error) {
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)

export { default as home }from './home'
export { default as wxSdk }from './wxSdk'
export { default as article }from './article'
export { default as articleList }from './articleList'
export { default as searchPublic }from './searchPublic'
export { default as publicList }from './publicList'
export { default as unsubscribe }from './unsubscribe'
export { default as toggleNight }from './toggleNight'
export { default as getToggleNight }from './getToggleNight'
export { default as subscribe }from './subscribe'