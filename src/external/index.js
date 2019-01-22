/**
 * 引入各类三方文件
 */
import 'normalize.css'
import { importExternalCss, importExternalJs } from '../utils/domUtil'
import { initWeiXinSdkConfig } from '../utils/jsConfig'
import '../styles/common.less'

// 阿里 iconfon 引入
importExternalCss('//at.alicdn.com/t/font_669321_wpu4z4o0ly.css')

// 微信 sdk
importExternalJs('//res.wx.qq.com/open/js/jweixin-1.2.0.js')
initWeiXinSdkConfig()