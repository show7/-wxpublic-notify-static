import * as React from 'react'
import { observer, inject } from 'mobx-react'
import PublicResults from './components/PublicResults/PublicResults'
import RobotAlertTips from './components/RobotAlertTips/RobotAlertTips'
import ScrollContainer from '../../components/ScrollContainer/ScrollContainer'

import './PublicHome.less'
import PublicGuide from './components/PublicGuide/PublicGuide'

@inject('publicHomeModel')
@observer
export default class PublicHome extends React.Component {

  async componentDidMount () {
    const { publicHomeModel } = this.props
    // 校验是否展示引导页面
    publicHomeModel.checkPublicGuideStatus()
    await publicHomeModel.loadInitData()
  }

  render () {
    const { publicHomeModel } = this.props

    return (
      <div className="public-home-container">
        <ScrollContainer className="public-home-scroll-block"
                         enablePullDown={true}
                         onPullDown={() => {
                           publicHomeModel.refreshAllWeChats()
                         }}
                         enableReachBottom={true}
                         onReachBottom={() => {
                           publicHomeModel.loadMoreWeChats()
                         }}>
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
              <img className="calcel-icon"
                   src="https://static.iqycamp.com/delete-icon-zkqufaap.png"
                   onClick={() => publicHomeModel.clickCancelSearchIcon()}/>
            </div>
          </div>
          {/* 菜单切换模块 */}
          <div className="switch-tab">
            <div className={`tab-item ${publicHomeModel.switchTabStatus == publicHomeModel.SWITCH_TAB_STATUS.ALL && 'active'}`}
                 onClick={() => publicHomeModel.changeSwitchTabStatus(publicHomeModel.SWITCH_TAB_STATUS.ALL)}>
              <div className="tab-text">全部</div>
              <div className="tab-highlight"></div>
            </div>
            <div className={`tab-item ${publicHomeModel.switchTabStatus == publicHomeModel.SWITCH_TAB_STATUS.SUBSCRIBED && 'active'}`}
                 onClick={() => publicHomeModel.changeSwitchTabStatus(publicHomeModel.SWITCH_TAB_STATUS.SUBSCRIBED)}>
              <div className="tab-text">已订阅</div>
              <div className="tab-highlight"></div>
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
