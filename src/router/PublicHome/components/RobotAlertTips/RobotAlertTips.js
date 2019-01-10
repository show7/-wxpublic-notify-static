import * as React from 'react'
import Mask from '../../../../components/Mask/Mask'
import PropTypes from 'prop-types'

import './RobotAlertTips.less'

export default class RobotAlertTips extends React.Component {

  render () {
    const {
      content = '',
      buttons = []
    } = this.props

    return (
      <div className="robot-alert-tips-component">
        <div className="robot-alert-tips-block">
          <div className="robot-alert-title">
            <img className="robot-avatar"
                 src="https://thirdwx.qlogo.cn/mmopen/siaKjia9aBPcJHOCEV6z4Ayic3SEaztBgIHFjfNZCFnvibW7bURBmYJIwfoRgN2guicWOGEPX1S05NqJyTwA1EzoIJgWEdJg3nXlZ/132"/>
            <span className="robot-title">小新提示</span>
          </div>
          <div className="robot-alert-content">{content}</div>
          <div className="robot-alert-bottom">
            {
              buttons.map((button, index) => (
                <div key={index}
                     className={`robot-buttom-item ${button.primary && 'primary'}`}
                     onClick={() => button.onClick()}>
                  {button.text}
                </div>
              ))
            }
          </div>
        </div>
        <Mask/>
      </div>
    )
  }

}

RobotAlertTips.propTypes = {
  content: PropTypes.string,
  buttons: PropTypes.array,  // text, primary, onClick
}