import * as React from 'react'
import PropTypes from 'prop-types'
import { previewImage } from '../../utils/jsConfig'

export default class PreviewImage extends React.Component {

  state = {
    randomClass: `scroll-container-${Math.floor(Math.random() * 100)}`
  }

  eventListenerDestory = null

  componentDidMount () {
    this.eventListenerDestory = this.initEventListener()
  }

  componentWillUnmount () {
    this.eventListenerDestory && this.eventListenerDestory()
  }

  initEventListener () {
    const { src = '', picList = [src] } = this.props

    let node = document.querySelector(`.${this.state.randomClass}`)
    let clickCallback = () => {
      previewImage(src, picList)
    }
    node.addEventListener('click', clickCallback, false)
    return () => {
      node.removeEventListener('click', clickCallback)
    }
  }

  render () {
    const { src = '', picList } = this.props

    return (
      <img className={`preview-image-component ${this.state.randomClass}`}
           src={src}
           style={{ display: 'inline-block' }}></img>
    )
  }

}

PreviewImage.propTypes = {
  src: PropTypes.string,
  picList: PropTypes.array
}