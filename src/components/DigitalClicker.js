import React, { Component } from 'react'

export default class DigitalClicker extends Component {

  state = {
    timesClicked: 0
  }

  clickHandle = () => {
    this.setState(prevState => ({
      timesClicked: prevState.timesClicked + 1
    }))
  }

  render () {
    return (

      <div>
        <button onClick={this.clickHandle}>{this.state.timesClicked}</button>
      </div>
    )
}
}
