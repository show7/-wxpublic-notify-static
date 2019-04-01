/**
 * 全局默认配置的 sdk 列表
 */
import { ajaxGet } from '../request'

const defaultJsList = [
  'hideOptionMenu',
  'showOptionMenu',
  'previewImage',
  'onMenuShareTimeline',
  'onMenuShareAppMessage'
]

/**
 * 初始化 wx sdk 配置信息
 */
export async function initWeiXinSdkConfig() {
  let wx = wx || false
  if (!!!wx) {
    return
  }
  let validateParam = {}
  try {
    let signatureRes = await ajaxGet(
      `/wx/js/signature?url=${encodeURIComponent(
        window.location.href.split('#')[0]
      )}`
    )
    if (signatureRes.code === 200) {
      validateParam = signatureRes.msg
      try {
        wx.config(
          Object.assign(
            {
              debug: false,
              jsApiList: defaultJsList
            },
            validateParam
          )
        )
        wx.ready(() => {
          console.log('jssdk 配置成功')
        })
      } catch (err) {
        console.error(err)
      }
    } else {
      console.error('微信 sdk 配置失败')
    }
  } catch (err) {
    console.error(err)
  }
}

/**
 * 图片预览
 * @param current 当前链接
 * @param picList 图片预览列表链接
 */
export function previewImage(current, picList) {
  wx.previewImage({
    current: current, // 当前显示图片的http链接
    urls: picList // 需要预览的图片http链接列表
  })
}

/**
 * 微信关闭窗口功能
 * @param current
 * @param picList
 */
export function closeWindow(current, picList) {
  wx.closeWindow()
}
