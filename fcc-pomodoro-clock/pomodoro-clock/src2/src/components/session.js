import React, { Component } from 'react';
import Period from './period'


class Session extends Component { 
    render() {
      return (
          <div id="session-label"> Session Length
              <Period length="25" name="Session"/>
          </div> 
      )
    }
}

export default Session;