import axios from 'axios';
import TYPES from '../store/types'
let platform = 'we_mobile'
axios.defaults.headers.platform = platform
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.interceptors.response.use(
  (response: any) => {
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

