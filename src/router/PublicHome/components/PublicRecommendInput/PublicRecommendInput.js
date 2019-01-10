import * as React from 'react'
import { inject, observer } from 'mobx-react'
import Mask from '../../../../components/Mask/Mask'

import './PublicRecommendInput.less'

@inject('publicHomeModel')
@observer
export default class PublicRecommendInput extends React.Component {

  async handleClickSubmitBtn () {
    const {
      publicHomeModel
    } = this.props
    await publicHomeModel.recommendWeChat({ weChatName: publicHomeModel.recommendInputValue })
    await publicHomeModel.changeRecommendStatus(false)
  }

  render () {
    const {
      publicHomeModel
    } = this.props

    return (
      <div className="public-recommend-input-component">
        <div className={`public-recommend-input-block ${publicHomeModel.isShowRecommendInput ? 'show' : 'hidden'}`}>
          <div className="recommend-input-top">
            <div className="split-line"></div>
            <input ref="recommendInput"
                   className="public-input"
                   type="text"
                   placeholder="请输入你推荐收录的公众号名称"
                   maxLength={20}
                   value={publicHomeModel.recommendInputValue}
                   onChange={(e) => publicHomeModel.listenRecommendInputValueChange(e)}/>
          </div>
          <div className="recommend-input-bottom">
            <div className="recommend-button-item cancel"
                 onClick={() => publicHomeModel.changeRecommendStatus(false)}>取消
            </div>
            <div className="recommend-button-item submit"
                 onClick={() => this.handleClickSubmitBtn()}>提交
            </div>
          </div>
        </div>
        {
          publicHomeModel.isShowRecommendInput &&
          <Mask/>
        }
      </div>
    )
  }

}