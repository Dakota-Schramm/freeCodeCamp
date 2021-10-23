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
        <div id="settings" className="row">
          <div className ="col"><Break /></div>
          <div className ="col"><Session /></div>
        </div>
      )
    }
  }

export default Settings;