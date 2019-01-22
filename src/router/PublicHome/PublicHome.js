import * as React from 'react'
import { observer, inject } from 'mobx-react'
import PublicResults from './components/PublicResults/PublicResults'
import RobotAlertTips from './components/RobotAlertTips/RobotAlertTips'
import ScrollContainer from '../../components/ScrollContainer/ScrollContainer'
import PublicGuide from './components/PublicGuide/PublicGuide'
import GuideImage from './components/GuideImage/GuideImage'
import BrandBlock from './components/BrandBlock/BrandBlock'

import './PublicHome.less'

@inject('publicHomeModel')
@observer
export default class PublicHome extends React.Component {

  scrollListenerDestory = null

  async componentDidMount () {
    const { publicHomeModel } = this.props

    let bfscrolltop = document.body.scrollTop
    document.body.addEventListener('focus', function () {
      window.scrollTo(0, bfscrolltop)
    }, true)
    document.body.addEventListener('blur', function () {
      window.scrollTo(0, bfscrolltop)
    }, true)

    // 校验是否展示引导页面
    publicHomeModel.checkPublicGuideStatus()
    await publicHomeModel.loadInitData()
    this.scrollListenerDestory = publicHomeModel.initScrollListener()
  }

  componentWillUnmount () {
    this.scrollListenerDestory && this.scrollListenerDestory()
  }

  render () {
    const { publicHomeModel } = this.props

    return (
      <div className="public-home-container">
        <ScrollContainer className="public-home-scroll-block"
                         enablePullDown={false}
                         onPullDown={() => {
                           publicHomeModel.refreshAllWeChats()
                         }}
                         enableReachBottom={true}
                         onReachBottom={() => {
                           publicHomeModel.loadMoreWeChats()
                         }}>


          {/* 添加特殊逻辑，此处 block 占一屏空间 */}
          <div className={`${publicHomeModel.isSearchingStatus ? '' : 'first-screen-block'} `}>
            {/* 品牌头图 */}
            <BrandBlock/>

            {/* 公众号搜索块 */}
            <div className="search-block">
              <div className="search-inner">
                <img className="search-icon"
                     src="https://static.iqycamp.com/search-icon-r1tq867b.png"/>
                <input className="search-input"
                       type="text"
                       placeholder="输入公众号名称"
                       maxLength={10}
                       value={publicHomeModel.searchInputValue}
                       onChange={(e) => publicHomeModel.listenSearchInputValueChange(e)}/>
                {
                  publicHomeModel.searchInputValue && publicHomeModel.searchInputValue.length > 0 &&
                  <img className="calcel-icon"
                       src="https://static.iqycamp.com/delete-icon-zkqufaap.png"
                       onClick={() => publicHomeModel.clickCancelSearchIcon()}/>
                }
              </div>
            </div>

            {/* 引导图模块 */}
            {
              !publicHomeModel.isSearchingStatus &&
              <GuideImage/>
            }

            {/* 菜单切换模块 */}
            <div className="switch-tab">
              <div className={`tab-item ${publicHomeModel.switchTabStatus == publicHomeModel.SWITCH_TAB_STATUS.ALL && 'active'}`}
                   onClick={() => publicHomeModel.changeSwitchTabStatus(publicHomeModel.SWITCH_TAB_STATUS.ALL)}>
                <div className="tab-text">{publicHomeModel.isSearchingStatus ? '全部' : '推荐列表'}</div>
                <div className="tab-highlight"></div>
              </div>
              <div className={`tab-item ${publicHomeModel.switchTabStatus == publicHomeModel.SWITCH_TAB_STATUS.SUBSCRIBED && 'active'}`}
                   onClick={() => publicHomeModel.changeSwitchTabStatus(publicHomeModel.SWITCH_TAB_STATUS.SUBSCRIBED)}>
                <div className="tab-text">已订阅</div>
                <div className="tab-highlight"></div>
              </div>
            </div>
          </div>

          {/* 查询结果模块 */}
          <PublicResults isAllSwitchTab={publicHomeModel.switchTabStatus == publicHomeModel.SWITCH_TAB_STATUS.ALL}
                         isSearchingStatus={publicHomeModel.isSearchingStatus}
                         allWeChats={publicHomeModel.allWeChats}
                         subscribedWeChats={publicHomeModel.subscribedWeChats}
                         searchedOwnedWeChats={publicHomeModel.searchedOwnedWeChats}
                         searchedNetWeChats={publicHomeModel.searchedNetWeChats}/>

          {/* 提醒弹框 */}
          {
            publicHomeModel.isShowRobotAlertTips &&
            <RobotAlertTips content={publicHomeModel.robotAlertTipsParams.content}
                            buttons={publicHomeModel.robotAlertTipsParams.buttons}/>
          }
        </ScrollContainer>

        {
          publicHomeModel.isShowPublicGuide &&
          <PublicGuide lastStepCallback={() => publicHomeModel.hidePublicGuide()}/>
        }
      </div>
    )
  }

}
