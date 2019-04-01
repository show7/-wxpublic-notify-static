import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyload from 'vue-lazyload'
import '../mock';
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
// Vue.use(VueLazyload, { preLoad: 1 })

Vue.config.productionTip = false

/**
 * 引入各类三方文件
 */
import { importExternalCss, importExternalJs } from './utils/domUtil'
import { initWeiXinSdkConfig } from './utils/jsConfig'

// 阿里 iconfon 引入
importExternalCss('//at.alicdn.com/t/font_669321_wpu4z4o0ly.css')

// 微信 sdk
importExternalJs('//res.wx.qq.com/open/js/jweixin-1.2.0.js')


const app: Vue = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  mounted() {
    initWeiXinSdkConfig()
  }
})

export default app
