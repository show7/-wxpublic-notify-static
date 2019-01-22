import * as React from 'react'

import './GuideImage.less'

export default class GuideImage extends React.Component {

  render () {
    return (
      <div className="guide-image-component" {...this.props}>
        <div className="guide-image-title">
          <img src="https://static.iqycamp.com/03-wo3wcctn.png"
               alt="guide"/>
          <span>小新提示</span>
        </div>
        <div className="guide-tips">你订阅的公众号发文后，我会微信提醒你哒！</div>
        <div className="image-list">
          <img src="https://static.iqycamp.com/05-4r6r1d37.jpg"
               alt=""/>
          <img src="https://static.iqycamp.com/06-69dh5vrq.jpg"
               alt=""/>
          <img src="https://static.iqycamp.com/07-nugo1f49.jpg"
               alt=""/>
        </div>
      </div>
    )
  }

}