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
                 src="https://static.iqycamp.com/robot-avatar-tvrfmvxy.png"/>
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