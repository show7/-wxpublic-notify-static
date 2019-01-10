/**
 * 此文件存放业务逻辑请求 api
 */
import { pget, ppost } from '../utils/request'

const business_api = {
  // 获取全部的公众号
  loadAllWeChats: (page = 1) => pget(`/api/webwechat/all/list?page=${page}`),
  // 获取已经订阅过的公众号
  loadSubscribedWeChats: (page = 1) => pget(`/api/webwechat/subscribe/list?page=${page}`),
  // 搜索指定名称的公众号
  loadWebWeChatsByName: (weChatName) => pget(`/api/webwechat/search?weChatName=${weChatName}`),
  // 关注某个公众号
  subscribeSingleWeChat: (params) => ppost(`/api/webwechat/subscribe`, { weChatPublicId: params.weChatPublicId }),
  // 取关某个公众号
  unSubscribeSingleWeChat: (params) => ppost(`/api/webwechat/unsubscribe`, { weChatPublicId: params.weChatPublicId }),
  // 推荐公众号
  recommendWeChat: (params) => ppost(`/api/webwechat/recommend`, { searchId: params.searchId, weChatName: params.weChatName })
}

export default business_api
