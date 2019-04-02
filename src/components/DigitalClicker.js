// Code DigitalClicker Component Here
import React from 'react'

export default class DigitalClicker extends React.Component {

  state = {
    timesClicked: 0
  }

  updateClick = () => {
    this.setState( { timesClicked:  this.state.timesClicked+1  } )
    console.log(this.state)
  }

  render() {
    return(
      <button onClick={this.updateClick}>{this.state.timesClicked}</button>
    )
  }


}
