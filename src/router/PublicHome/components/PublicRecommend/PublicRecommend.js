import * as React from 'react'
import { inject, observer } from 'mobx-react'
import PropTypes from 'prop-types'

import './PublicRecommend.less'

@inject('publicHomeModel')
@observer
export default class PublicRecommend extends React.Component {

  render () {
    const {
      className = '',
      publicHomeModel
    } = this.props

    return (
      <div className={`public-recommend-component ${className}`}
           onClick={() => publicHomeModel.changeRecommendStatus(true)}>
        <span className="recommend-text">没有我想要的，我要让小新补充收录！</span>
      </div>
    )
  }

}

PublicRecommend.propTypes = {
  className: PropTypes.string
}