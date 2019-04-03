// Code YouTubeDebugger Component Here
import React from 'react'

class YouTubeDebugger extends React.Component {
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

  handleBitrate = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }

  handleResolution = () => {
    console.log(this)
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.settings.video,
          resolution: "720p"
        }
      }
    })
  }


  render(){
    return (
      <div>
        <h1>Bitrate is {this.state.settings.bitrate}</h1>
        <h1>Resolution is {this.state.settings.video.resolution}</h1>
        <button className="bitrate" onClick={this.handleBitrate}>Change Bitrate to 12</button>
        <button className="resolution" onClick={this.handleResolution}>Change Res to 720</button>
      </div>
    )
  }

}

export default YouTubeDebugger;
