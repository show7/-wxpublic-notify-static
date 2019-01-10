import * as React from 'react'
import { observer, inject } from 'mobx-react'

@inject('mobxDemoModel')
@observer
export default class MobxDemo extends React.Component {

  componentDidMount () {
    console.log(this.props)
  }

  changeName () {
    this.props.mobxDemoModel.setName('程序员')
  }

  render () {
    return (
      <div>
        <button onClick={() => this.changeName()}>
          Primary
        </button>
        <div>{this.props.mobxDemoModel.name}</div>
      </div>
    )
  }

}