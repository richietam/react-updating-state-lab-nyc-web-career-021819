import React, { Component } from 'react'

export default class YouTubeDebugger extends Component {

  state = {
    errors: [],
    user: null,
    settings: {
      bitrate: 8,
      video: {
        resolution: '1080p'
      }
    }
  }

  handleBitRate = () => {
    this.setState({
      settings: {
        ...this.state.settings, bitrate: 12
      }
    })
  }

  handleResolution = () => {
     this.setState({
       settings: {
        ...this.state.settings,
        video: {
          ...this.state.settings.video, resolution: '720p'
       }
     }
   })
  }

render () {
    console.log(this.state)
    return (
      <div>
        <button onClick={this.handleBitRate} className="bitrate">Change bitRate</button>
        <button onClick={this.handleResolution} className="resolution">Change resolution</button>
      </div>
    )
  }
}
