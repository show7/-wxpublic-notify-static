import * as React from 'react'
import { observer, inject } from 'mobx-react'
import PropTypes from 'prop-types'
import PublicSummary from '../PublicSummary/PublicSummary'
import PublicRecommend from '../PublicRecommend/PublicRecommend'
import PublicRecommendInput from '../PublicRecommendInput/PublicRecommendInput'

import './PublicResults.less'

@inject('publicHomeModel')
@observer
export default class PublicResults extends React.Component {

  renderAllResults () {
    const {
      allWeChats = []
    } = this.props

    return (
      <div className="all-results-list">
        {
          allWeChats.map((weChatItem, index) => (
            <PublicSummary key={index}
                           data={weChatItem}/>
          ))
        }
      </div>
    )
  }

  renderSearchResults () {
    const {
      searchedOwnedWeChats = [],
      searchedNetWeChats = [],
      publicHomeModel
    } = this.props

    if (searchedOwnedWeChats.length == 0 && searchedNetWeChats.length == 0) {
      return (
        <div className="search-results-list">
          <div className="empty-tips">小新没有找到你心仪公众号</div>
          {/* 推荐收录 */}
          <PublicRecommend className="recommend-btn"/>
          <PublicRecommendInput/>
        </div>
      )
    }

    return (
      <div className="search-results-list">
        <div className="self-summaries-block">
          <div className={`self-summaries-inner-container ${publicHomeModel.showAllOwnedWeChats && 'show-all'}`}>
            {
              searchedOwnedWeChats.map((weChatItem, index) => (
                <PublicSummary key={index}
                               data={weChatItem}/>
              ))
            }
          </div>
          {
            !publicHomeModel.showAllOwnedWeChats && searchedOwnedWeChats.length > 3 &&
            <div className="show-more-tips"
                 onClick={() => publicHomeModel.showAllSearchedOwnedWeChats()}>更多公众号 <i className="iconfont icon-down"/>
            </div>
          }
        </div>
        {
          searchedNetWeChats.length > 0 &&
          <div className="net-summaries-block">
            <div className="net-summaries-tips">
              以下公众号还没有收录，<br/>可以点击公众号推荐收录哦！
            </div>
            <div className="net-summaries-inner-container">
              {
                searchedNetWeChats.map((weChatItem, index) => (
                  <PublicSummary key={index}
                                 hideSubscribeBtn={true}
                                 data={weChatItem}/>
                ))
              }
            </div>
          </div>
        }
        {/* 推荐收录 */}
        <PublicRecommend className="recommend-btn"/>
        <PublicRecommendInput/>
      </div>
    )
  }

  renderSubscribedResults () {
    const {
      subscribedWeChats = []
    } = this.props
    return (
      <div className="all-results-list">
        {
          subscribedWeChats.map((weChatItem, index) => (
            <PublicSummary key={index}
                           data={weChatItem}/>
          ))
        }
      </div>
    )
  }

  render () {
    const {
      isAllSwitchTab = true,
      isSearchingStatus = false,
    } = this.props

    return (
      <div className="public-results-component">
        {
          isAllSwitchTab ?
            isSearchingStatus ?
              this.renderSearchResults() :
              this.renderAllResults() :
            this.renderSubscribedResults()
        }
      </div>
    )
  }
}

PublicResults.propTypes = {
  isSearchingStatus: PropTypes.bool,
  isAllSwitchTab: PropTypes.bool, // 当前的 tab 是否是全部的查看列表

  allWeChats: PropTypes.array,
  subscribedWeChats: PropTypes.array,
  searchedOwnedWeChats: PropTypes.array,
  searchedNetWeChats: PropTypes.array
}