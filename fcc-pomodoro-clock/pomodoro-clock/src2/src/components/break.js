import React, { Component } from 'react';
import Period from './period'

class Break extends Component {
    constructor(props) {
      super(props);
      this.state = {
        break: this.props.breakLen
      }
    }
      
    render() {
      return (
          <div id="break-label"> Break Length
            <Period length="5" name="Break"/>
          </div>
      )
    }
}

export default Break;