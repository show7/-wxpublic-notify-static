import * as React from 'react'
import PreviewImage from '../../../../components/PreviewImage/PreviewImage'

import './GuideImage.less'

export default class GuideImage extends React.Component {

  PreviewImages = [
    'https://static.iqycamp.com/step1-rnmbk8z2.png',
    'https://static.iqycamp.com/step2-7m2jbob4.png',
    'https://static.iqycamp.com/step3-g53oaaqj.png'
  ]

  render () {
    return (
      <div className="guide-image-component" {...this.props}>
        <div className="guide-image-title">
          <img src="https://static.iqycamp.com/03-wo3wcctn.png"/>
          <span>小新提示</span>
        </div>
        <div className="guide-tips">你订阅的公众号发文后，我会微信提醒你哒！</div>
        <div className="image-list">
          <PreviewImage src={this.PreviewImages[0]}
                        picList={this.PreviewImages}/>
          <PreviewImage src={this.PreviewImages[1]}
                        picList={this.PreviewImages}/>
          <PreviewImage src={this.PreviewImages[2]}
                        picList={this.PreviewImages}/>
        </div>
      </div>
    )
  }

}