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
  // 获取文章阅读状态列表 type 1-已读，2-未读
  loadArticleList: (type, page = 1) => pget(`/api/webwechat/article/list?type=${type}&page=${page}&timestamp=${new Date().getTime()}`),
  // 关注某个公众号
  subscribeSingleWeChat: (params) => ppost(`/api/webwechat/subscribe`, { weChatPublicId: params.weChatPublicId, isSearchResult: params.isSearchResult }),
  // 取关某个公众号
  unSubscribeSingleWeChat: (params) => ppost(`/api/webwechat/unsubscribe`, { weChatPublicId: params.weChatPublicId }),
  // 推荐公众号
  recommendWeChat: (params) => ppost(`/api/webwechat/recommend`, { searchId: params.searchId, weChatName: params.weChatName }),
  // 打开文章
  openArticle: (params) => ppost(`/api/webwechat/article/open`, { recordId: params.recordId })
}

export default business_api
