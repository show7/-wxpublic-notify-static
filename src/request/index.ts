import axios from 'axios';
import TYPES from '../store/types'

axios.interceptors.response.use(
  (response: any) => {
    // 对响应数据做点什么
    return response.data
    // window.location.href =
    //   decodeURI(
    //     `${window.location.protocol}//${
    //       window.location.host
    //     }/login?callbackUrl=`
    //   ) + encodeURIComponent(window.location.href)
  },
  function(error) {
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)

export { default as home }from './home'
export { default as wxSdk }from './home'