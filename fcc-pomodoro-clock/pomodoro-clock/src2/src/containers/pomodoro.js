import React, { Component } from 'react';

import Settings from '../components/settings'
import Timer from '../components/timer'

class Pomodoro extends Component {
  constructor(props) {
    super(props);
    this.state = {
        paused: true
    }

    this.startStop = this.startStop.bind(this);
    this.reset = this.reset.bind(this);

  }

  startStop() {
      if (this.state.paused) {

          this.state.paused = false;
      } else {

          this.state.paused = true;
      }
  }

  reset() {

  }
  render() {
    return (
      <div> 
        <h1 id="title">Pomodoro Timer</h1>
        <Settings />
        <Timer />
        <div id="buttons"> 
          <button id="start-stop" onClick={this.startStop}></button>
          <button id="reset" onClick={this.reset}></button>
        </div>
      </div>
    )
  }
}

export default Pomodoro;