import { observable, action } from 'mobx'
import Api from '../../api/Api'
import { frequencyLimitRunAfter } from '../../utils/utils'

class PublicHomeModel {

  // tab 标签状态
  SWITCH_TAB_STATUS = {
    ALL: Symbol('all'),
    SUBSCRIBED: Symbol('subscribed')
  }

  @observable allWeChats = []
  @observable isAllWeChatsLoadEnd = false
  @observable currentAllWeChatsPage = 1

  @observable subscribedWeChats = []
  @observable isSubscribeWeChatsLoadEnd = false
  @observable currentSubscribedWeChatsPage = 1

  @observable searchInputValue = ''
  @observable searchedOwnedWeChats = []
  @observable searchedNetWeChats = []
  @observable showAllOwnedWeChats = false

  @observable switchTabStatus = this.SWITCH_TAB_STATUS.ALL // tab 的切换状态
  @observable isSearchingStatus = false // 当前是否是查询状态

  @observable isShowRecommendInput = false
  @observable recommendInputValue = ''

  @observable isShowRobotAlertTips = false
  @observable robotAlertTipsParams = {
    content: '',
    buttons: []
  }

  @observable isShowPublicGuide = false

  @action.bound
  checkPublicGuideStatus () {
    this.isShowPublicGuide = !!!window.localStorage.getItem('isReadGuide')
  }

  @action.bound
  hidePublicGuide () {
    this.isShowPublicGuide = false
    window.localStorage.setItem('isReadGuide', true)
  }

  @action.bound
  async loadInitData () {
    this._loadInitAllWeChats()
    this._loadInitSubscribedWeChats()
  }

  async _loadInitAllWeChats () {
    // 获取首页所有的公众号名单
    let allWeChatsRes = await Api.loadAllWeChats()
    this.allWeChats = allWeChatsRes.msg.content
    this.isAllWeChatsLoadEnd = allWeChatsRes.msg.isEnd
    this.currentAllWeChatsPage = 1
  }

  async _loadInitSubscribedWeChats () {
    // 获取首页已关注的公众号名单
    let subscribedWeChatRes = await Api.loadSubscribedWeChats()
    this.subscribedWeChats = subscribedWeChatRes.msg.content
    this.isSubscribeWeChatsLoadEnd = subscribedWeChatRes.msg.isEnd
    this.currentSubscribedWeChatsPage = 1
  }

  @action.bound
  async refreshAllWeChats () {
    this._loadInitAllWeChats()
    this._loadInitSubscribedWeChats()
    this.isSearchingStatus = false
  }

  @action.bound
  async loadMoreWeChats () {
    // 非查询状态
    if (this.isSearchingStatus) {
      return
    }
    switch (this.switchTabStatus) {
      // 全部列表下拉刷新
      case this.SWITCH_TAB_STATUS.ALL:
        if (this.isAllWeChatsLoadEnd) {
          return
        }
        let allWeChatsRes = await Api.loadAllWeChats(++this.currentAllWeChatsPage)
        this.isAllWeChatsLoadEnd = allWeChatsRes.msg.isEnd
        this.allWeChats = this.allWeChats.concat(allWeChatsRes.msg.content)
        break
      // 个人列表下拉刷新
      case this.SWITCH_TAB_STATUS.SUBSCRIBED:
        if (this.isSubscribeWeChatsLoadEnd) {
          return
        }
        let subscribedWeChatsRes = await Api.loadSubscribedWeChats(++this.currentSubscribedWeChatsPage)
        this.isSubscribeWeChatsLoadEnd = subscribedWeChatsRes.msg.isEnd
        this.subscribedWeChats = this.subscribedWeChats.concat(subscribedWeChatsRes.msg.content)
        break
      default:
        break
    }
  }

  /**
   * 改变显示分类标签
   * @param switchTabStatus
   */
  @action.bound
  changeSwitchTabStatus (switchTabStatus) {
    if (switchTabStatus === this.SWITCH_TAB_STATUS.SUBSCRIBED) {
      this._loadInitSubscribedWeChats()
    }
    this.switchTabStatus = switchTabStatus
    if (switchTabStatus === this.SWITCH_TAB_STATUS.SUBSCRIBED) {
      Api.base_mark({ module: '又更新了', function: '点击按钮', action: '查看已订阅' })
    }
  }

  /**
   * 监听 input 的数据变化
   * @param e 事件对象
   */
  @action.bound
  listenSearchInputValueChange (e) {
    this.searchInputValue = e.target.value
    frequencyLimitRunAfter(async () => {
      let searchedWeChatsDataRes = await Api.loadWebWeChatsByName(this.searchInputValue)
      this.searchedOwnedWeChats = searchedWeChatsDataRes.msg.ownerList
      this.searchedNetWeChats = searchedWeChatsDataRes.msg.searchList
      this.showAllOwnedWeChats = false
      this.isSearchingStatus = true
      this.switchTabStatus = this.SWITCH_TAB_STATUS.ALL
    }, 800)
  }

  @action.bound
  showAllSearchedOwnedWeChats () {
    this.showAllOwnedWeChats = true
  }

  @action.bound
  clickCancelSearchIcon () {
    this.searchInputValue = ''
    this.isSearchingStatus = false
  }

  @action.bound
  async subscribeWeChat (weChat) {
    Api.base_mark({ module: '又更新了', function: !!weChat.isSearchResult, action: '点击订阅按钮', memo: weChat.weChatPublicId + '' })
    let subscribeRes = await Api.subscribeSingleWeChat({ weChatPublicId: weChat.weChatPublicId, isSearchResult: weChat.isSearchResult })
    weChat.isSubscribe = true
    if (subscribeRes.msg == 5) {
      this._showRobotAlertTips({
        content: '你已经订阅了5个心仪的公众号啦~ 继续订阅的话，每天可能会收到多条来自小新的提醒哦！',
        buttons: [
          {
            text: '好的',
            primary: true,
            onClick: () => {
              this._hideRobotAlertTips()
            }
          }
        ]
      })
    }
    setTimeout(() => {
      this._refreshWeChats(weChat)
    }, 0)
  }

  @action.bound
  async warnUnSubscribeWeChat (weChat) {
    Api.base_mark({ module: '又更新了', function: '点击按钮', action: '取消订阅按钮', memo: weChat.weChatPublicId + '' })
    this._showRobotAlertTips({
      content: '取消订阅之后，就不能收到最新更新的提醒了哦！',
      buttons: [
        {
          text: '再想想',
          primary: true,
          onClick: () => {
            this._hideRobotAlertTips()
          }
        },
        {
          text: '确认取消',
          primary: false,
          onClick: async () => {
            this._unSubscribeWeChat(weChat)
            this._hideRobotAlertTips()
          }
        }
      ]
    })
  }

  async _unSubscribeWeChat (weChat) {
    Api.base_mark({ module: '又更新了', function: '取关', action: '取关', memo: weChat.weChatPublicId + '' })
    let subscribeRes = await Api.unSubscribeSingleWeChat({ weChatPublicId: weChat.weChatPublicId })
    weChat.isSubscribe = false
    setTimeout(() => {
      this._refreshWeChats(weChat)
    }, 0)
  }

  /**
   * 刷新两个 weChat 列表的数据状态
   * @param weChatPublicId
   * @private
   */
  _refreshWeChats (weChat) {
    this.allWeChats.forEach((item, index) => {
      if (item.weChatPublicId === weChat.weChatPublicId) {
        this.allWeChats[index] = JSON.parse(JSON.stringify(item))
      }
    })
    this.subscribedWeChats.forEach((item, index) => {
      if (item.weChatPublicId === weChat.weChatPublicId) {
        this.subscribedWeChats[index] = JSON.parse(JSON.stringify(item))
      }
    })
  }

  @action.bound
  changeRecommendStatus (isShowRecommendBlock) {
    isShowRecommendBlock && Api.base_mark({ module: '又更新了', function: '推荐公众号', action: '点击自主推荐按钮' })
    this.isShowRecommendInput = isShowRecommendBlock
    this.recommendInputValue = ''
  }

  @action.bound
  listenRecommendInputValueChange (e) {
    this.recommendInputValue = e.target.value
  }

  @action.bound
  async recommendWeChat (recommendWeChatParams) {
    Api.base_mark({ module: '又更新了', function: '推荐公众号', action: recommendWeChatParams.weChatName, memo: recommendWeChatParams.searchId +'' })
    let recommendWeChatRes = await Api.recommendWeChat(recommendWeChatParams)
    this._showRobotAlertTips({
      content: '推荐成功！我会在24小时内审核，收录后会告诉你哒！',
      buttons: [
        {
          text: '好的',
          primary: true,
          onClick: () => {
            this._hideRobotAlertTips()
          }
        }
      ]
    })
  }

  _hideRobotAlertTips () {
    this.isShowRobotAlertTips = false
  }

  _showRobotAlertTips (robotAlertTipsParams) {
    this.robotAlertTipsParams = robotAlertTipsParams
    this.isShowRobotAlertTips = true
  }

}

const publicHomeModel = new PublicHomeModel()
export default publicHomeModel