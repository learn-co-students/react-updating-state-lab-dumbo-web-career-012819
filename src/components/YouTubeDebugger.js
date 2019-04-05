// Code YouTubeDebugger Component Here
import React, { Component } from 'react';

class YouTubeDebugger extends Component {

  state = {
    errors: [],
    user: null,
    settings: {
      bitrate: 8,
      video: {
        resolution: '1080p'
      }
    }
  };

  handleClickBitrate = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    }, console.log(this.state.settings))
  };

  handleClickResolution = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.settings.video,
          resolution: '720p'
        }
      }
    }, console.log(this.state.settings.video))
  };

  render() {
    return(
      <div>
        <h1>YouTube Debugger:</h1>
        <button className="bitrate" onClick={this.handleClickBitrate}>Bitrate Setting</button>
        <button className="resolution" onClick={this.handleClickResolution}>Resolution Setting</button>
      </div>
    )
  }

};

export default YouTubeDebugger;
