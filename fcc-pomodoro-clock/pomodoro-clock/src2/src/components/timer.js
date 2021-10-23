import React, { Component } from 'react';

class Timer extends Component {
    constructor(props) {
      super(props);
      this.state = {
        timeMin: 25,
        timeSec: 0
      } //Initialize state here.
     }
    render() {
      return (
        <div id="col-labels">
          <div id="timer-label"> Timer
            <div id="time-left"></div>
            <button id="start-stop"></button>
            <button id="reset"></button>
          </div>
        </div>
      )
    }
  }

export default Timer;