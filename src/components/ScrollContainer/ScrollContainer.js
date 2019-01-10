import * as React from 'react'
import PropTypes from 'prop-types'
import { frequencyLimitRunFirst } from '../../utils/utils'

export default class ScrollContainer extends React.Component {

  state = {
    randomClass: `scroll-container-${Math.floor(Math.random() * 100)}`
  }
  // 本次滚动区块的 DOM 实例
  instance = null

  componentDidMount () {
    const {
      enablePullDown = false,
      enableReachBottom = false,
    } = this.props
    // 将滚动对象实例绑定到此组件上
    this.instance = document.body.querySelector(`.${this.state.randomClass}`)

    // 如果允许下拉加载
    if (enablePullDown) {
      this.initPullDownListener()
    }

    // 如果允许触发触底方法
    if (enableReachBottom) {
      this.initReachBottomListener()
    }
  }

  // 释放各种资源
  componentWillUnmount () {
    this.instance = null
    this.destoryPullDownListener()
    this.destoryReachBottomListener()
  }

  initPullDownListener () {
    const {
      onPullDown = () => {
      }
    } = this.props

    let startPosition   // 初始位置
    let offsetPosition  // 偏移量
    let isTriggerCallback = false
    const pullDownTouchStartListener = (e) => {
      startPosition = e.touches[0].pageY
      this.instance.style.position = 'relative'
      this.instance.style.transition = 'transform 0s'
    }
    const pullDownTouchMoveListener = (e) => {
      let scrollTop = this.instance.scrollTop

      offsetPosition = e.touches[0].pageY - startPosition
      if (offsetPosition > 0 && offsetPosition < 80 && scrollTop == 0) {
        this.instance.style.transform = `translateY(${offsetPosition}px)`
      }
      isTriggerCallback = offsetPosition >= 80 && scrollTop == 0
    }
    const pullDownTouchEndListener = (e) => {
      this.instance.style.transition = 'transform 0.2s ease 0.5s'
      this.instance.style.transform = 'translateY(0)'
      if (isTriggerCallback) {
        // 对触底方法进行调用频率限制
        isTriggerCallback = false
        frequencyLimitRunFirst(() => onPullDown())
      }
    }
    this.instance.addEventListener('touchstart', pullDownTouchStartListener, false)
    this.instance.addEventListener('touchmove', pullDownTouchMoveListener, false)
    this.instance.addEventListener('touchend', pullDownTouchEndListener, false)

    return () => {
      this.instance.removeListener('touchstart', pullDownTouchStartListener)
      this.instance.removeListener('touchmove', pullDownTouchMoveListener)
      this.instance.removeListener('touchend', pullDownTouchEndListener)
    }
  }

  destoryPullDownListener () {
    this.initPullDownListener()()
  }

  initReachBottomListener () {
    const {
      onReachBottom = () => {
      }
    } = this.props

    const reachBottomScrollListener = (e) => {
      let scrollHeight = this.instance.scrollHeight
      let scrollTop = this.instance.scrollTop
      let clientHeight = this.instance.clientHeight
      if (scrollHeight - scrollTop - clientHeight <= 5) {
        frequencyLimitRunFirst(() => onReachBottom())
      }
    }
    this.instance.addEventListener('scroll', reachBottomScrollListener, false)

    return () => {
      this.instance.removeListener('scroll', reachBottomScrollListener)
    }
  }

  destoryReachBottomListener () {
    this.initReachBottomListener()()
  }

  render () {
    const { className = '' } = this.props

    return (
      <div className={`${this.state.randomClass} ${className}`}>
        {this.props.children}
      </div>
    )
  }

}

ScrollContainer.propTypes = {
  className: PropTypes.string,
  // 是否允许下拉加载
  enablePullDown: PropTypes.bool,
  // 下拉触发的方法
  onPullDown: PropTypes.func,
  // 是否开启触底方法
  enableReachBottom: PropTypes.bool,
  // 触底时触发的方法
  onReachBottom: PropTypes.func,
}