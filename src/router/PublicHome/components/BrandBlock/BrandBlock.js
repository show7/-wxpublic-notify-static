import * as React from 'react'

import './BrandBlock.less'

export default class BrandBlock extends React.Component {

  render () {
    return (
      <div className="brand-block-component" {...this.props}>
        <img className="brand-image"
             src="https://static.iqycamp.com/brand-q1j3ch5d.png"
             alt="brand"/>
        <div className="brand-tips">你的公众号更文提醒助理</div>
      </div>
    )
  }

}