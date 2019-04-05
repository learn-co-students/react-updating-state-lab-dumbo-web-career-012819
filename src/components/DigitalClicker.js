// Code DigitalClicker Component Here
import React, { Component } from 'react';

class DigitalClicker extends Component {

  state = {
    timesClicked: 0
  };

  handleClick = (event) => {
    this.setState({
      timesClicked: this.state.timesClicked + 1
    }, console.log(this.state.timesClicked))
  };

  render() {
    return(
      <div>
        <h1>DigitalClicker:</h1>
        <button onClick={this.handleClick}>{this.state.timesClicked}</button>
      </div>
    )
  }

};

export default DigitalClicker;
