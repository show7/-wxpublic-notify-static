import axios from 'axios'
let platform = 'we_mobile'
axios.defaults.headers.platform = platform
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.interceptors.response.use(
  (response: any) => {
    console.log(response)
    if (response.status === 700) {
      window.location.href =
        decodeURI(
          `${window.location.protocol}//${
            window.location.host
          }/wx/oauth/auth/10?callbackUrl=`
        ) + encodeURIComponent(window.location.href)
    } else {
      return response.data
    }
  },
  function(error) {
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)
export default axios
