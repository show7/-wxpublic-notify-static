import { merge } from 'lodash'
import sa from 'sa-sdk-javascript'
import axios from 'axios'

// 初始化神策打点
sa.init({
  heatmap_url: 'https://static.sensorsdata.cn/sdk/1.9.13/heatmap.min.js',
  name: 'sa',
  web_url: `https://quanwai.cloud.sensorsdata.cn/?project=${
    window.ENV.sensorsProject
  }`,
  server_url: `https://quanwai.cloud.sensorsdata.cn:4006/sa?token=0a145b5e1c9814f4&project=${
    window.ENV.sensorsProject
  }`,
  is_single_page: true,
  show_log: false,
  heatmap: {}
})

function mark(param) {
  if (!param.view) {
    // 只记录非view打点
    sa.track(
      'frontMark',
      merge({}, param, {
        module: param.module + '',
        function: param.function + '',
        action: param.action + '',
        memo: param.memo + ''
      })
    )
  }
  return axios
    .post('/rise/b/mark', param)
    .then(res => res.data)
    .catch(err => console.log(err))
}
export default mark
