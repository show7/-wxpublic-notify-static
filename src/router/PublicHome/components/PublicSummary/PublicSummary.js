import * as React from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'

import './PublicSummary.less'
import publicHomeModel from '../../PublicHomeModel'

@inject('publicHomeModel')
@observer
export default class PublicSummary extends React.Component {

  handleClickSingleSummary (summary) {
    const { hideSubscribeBtn } = this.props
    // 隐藏了关注、取关按钮，则代表此处是网络资源，点击会推荐收录
    if (hideSubscribeBtn) {
      publicHomeModel.recommendWeChat({ searchId: summary.searchId })
    }
  }

  render () {
    const {
      hideSubscribeBtn = false,
      data = {},
      publicHomeModel
    } = this.props
    const {
      avatar = 'https://thirdwx.qlogo.cn/mmopen/siaKjia9aBPcJHOCEV6z4Ayic3SEaztBgIHFjfNZCFnvibW7bURBmYJIwfoRgN2guicWOGEPX1S05NqJyTwA1EzoIJgWEdJg3nXlZ/132',
      weChatName = '三十文',
      isSubscribe = false,
      weChatPublicId = -1,
      searchId = -1, // 网络查找情况下才会有
    } = data

    return (
      <div className="public-summary-component"
           onClick={() => this.handleClickSingleSummary(data)}>
        <img className="public-image"
             src={avatar}/>
        <div className="public-name"
             dangerouslySetInnerHTML={{ __html: weChatName }}></div>
        {
          !hideSubscribeBtn ?
            isSubscribe ?
              <div className="public-status subscribed"
                   onClick={() => publicHomeModel.warnUnSubscribeWeChat(data)}>已订阅</div> :
              <div className="public-status un-subscribe"
                   onClick={() => publicHomeModel.subscribeWeChat(data)}>订阅</div> :
            null
        }
      </div>
    )
  }

}

PublicSummary.propTypes = {
  hideSubscribeBtn: PropTypes.bool,
  data: PropTypes.object
}