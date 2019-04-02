import axios from 'axios';


axios.interceptors.response.use(
  (response: any) => {
    // 对响应数据做点什么
    console.log(response)
    return response
    window.location.href =
      decodeURI(
        `${window.location.protocol}//${
          window.location.host
        }/login?callbackUrl=`
      ) + encodeURIComponent(window.location.href)
  },
  function(error) {
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)

import {getData} from './home'

export default getData