import React, { Component } from 'react';

import Break from './break'
import Session from './session'

class Settings extends Component {
    constructor(props) {
      super(props);
      this.state = {
      }
     }
    render() {
      return (
        <div id="settings">
          <Break />
          <Session />
        </div>
      )
    }
  }

export default Settings;