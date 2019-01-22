import * as React from 'react'
import PropTypes from 'prop-types'

import './PublicGuide.less'

export default class PublicGuide extends React.Component {

  state = {
    currentStep: 1
  }

  CURRENT_STEP = {
    STEP_ONE: 1,
    STEP_TWO: 2,
    STEP_THREE: 3,
    STEP_FOUR: 4
  }

  eventListenerDestory = null

  componentDidMount () {
    this.eventListenerDestory = this.initForbiddenScroll()
  }

  componentWillUnmount () {
    this.eventListenerDestory && this.eventListenerDestory()
  }

  initForbiddenScroll () {
    const preventDefaultFunc = (e) => {
      e.preventDefault()
    }
    window.addEventListener('scroll', preventDefaultFunc, false)
    return () => {
      window.removeEventListener('scroll', preventDefaultFunc)
    }
  }

  renderStepOne () {
    return (
      <div className="step-guide step-one"
           onClick={() => this.setState({ currentStep: this.CURRENT_STEP.STEP_TWO })}>
        <img className="bottom"
             src="https://static.iqycamp.com/step_01_bg-f8uyfj2l.png"/>
        <div className="middle"/>
        <img className="top"
             src="https://static.iqycamp.com/step_01_top-5zq8vv6z.png"/>
      </div>
    )
  }

  renderStepTwo () {
    return (
      <div className="step-guide step-two"
           onClick={() => this.setState({ currentStep: this.CURRENT_STEP.STEP_THREE })}>
        <img className="bottom"
             src="https://static.iqycamp.com/step_02_bg-9fpro0zb.png"/>
        <div className="middle"/>
        <img className="top"
             src="https://static.iqycamp.com/step_02_top-5a2bgdxb.png"/>
      </div>
    )
  }

  renderStepThree () {
    return (
      <div className="step-guide step-three"
           onClick={() => this.setState({ currentStep: this.CURRENT_STEP.STEP_FOUR })}>
        <img className="bottom"
             src="https://static.iqycamp.com/step_03_bg-c0nbsb5g.png"/>
        <div className="middle"/>
        <img className="top"
             src="https://static.iqycamp.com/step_03_top-8v9s62lm.png"/>
      </div>
    )
  }

  renderStepFour () {
    const {
      lastStepCallback = () => {
      }
    } = this.props
    return (
      <div className="step-guide step-four"
           onClick={() => lastStepCallback()}>
        <img className="bottom"
             src="https://static.iqycamp.com/step_04_bg-ritx8hux.png"/>
        <div className="middle"/>
        <img className="top"
             src="https://static.iqycamp.com/step_04_top-w4pbi3o2.png"/>
      </div>
    )
  }

  render () {
    return (
      <div className="public-guide-container">
        {this.state.currentStep === this.CURRENT_STEP.STEP_ONE && this.renderStepOne()}
        {this.state.currentStep === this.CURRENT_STEP.STEP_TWO && this.renderStepTwo()}
        {this.state.currentStep === this.CURRENT_STEP.STEP_THREE && this.renderStepThree()}
        {this.state.currentStep === this.CURRENT_STEP.STEP_FOUR && this.renderStepFour()}
      </div>
    )
  }

}

PublicGuide.propTypes = {
  lastStepCallback: PropTypes.func
}