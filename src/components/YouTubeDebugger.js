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

  handleClick = () => {
    console.log(this.state)

    this.setState({
      ...this.state,
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }

  handleResolutionClick = () => {
    console.log(this.state)

    this.setState({
      ...this.state,
      settings: {
        ...this.state.settings,
        video: {
        resolution: '720p'
        }
      }
    })
  }

  render(){
    return(
      <div>
        <button className='bitrate' onClick={this.handleClick}>Bitrate</button>
        <button className='resolution' onClick={this.handleResolutionClick}>resolution</button>
      </div>
    )
  }
}

export default YouTubeDebugger
