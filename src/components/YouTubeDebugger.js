import React from 'react';

export default class YouTubeDebugger extends React.Component {

  state = {
    errors: [],
    user: null,
    settings: {
      bitrate: 8,
      video: {resolution: '1080p'}
    }
  }

  handleBitRateClick = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    });

  }

  handleResolutionClick = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {resolution: '720p'}
      }
    }, () => console.log(this.state))
  }

  render(){
    return (
      <div>
        <button className="bitrate"
          onClick={this.handleBitRateClick}>Bitrate is {this.state.settings.bitrate}
        </button>
        <button className="resolution"
          onClick={this.handleResolutionClick}>Resolution is {this.state.settings.video.resolution}
        </button>
      </div>
    )
  }
}
