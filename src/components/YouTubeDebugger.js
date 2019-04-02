// Code YouTubeDebugger Component Here
import React, {Component } from 'react'

export default class YouTubeDebugger extends Component{
    state = {
        errors: [], user: null, settings: { bitrate: 8, video: { resolution: '1080p' } }
    }

    clickBit = () => {
        this.setState({
            settings: { ...this.state.settings, bitrate: 12}
        })
    }
    clickRes = () => {
        this.setState({
            settings: {...this.state.settings, video: {resolution: '720p'}
            }
        })
    }

    render(){
        return(
            <div>
                <button onClick={this.clickBit} className='bitrate'></button>
                <button onClick={this.clickRes} className='resolution'></button>
            </div>
        )
    }
}
