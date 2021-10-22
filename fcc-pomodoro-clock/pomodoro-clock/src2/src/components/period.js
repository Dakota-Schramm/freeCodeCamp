import React, { Component } from 'react';

class Period extends Component {
    constructor(props) {
      super(props);
      this.state = {
        break: this.props.breakLen
      }
      this.decrement = this.decrement.bind(this);
      this.increment = this.increment.bind(this);
     }

    decrement() {
      if (this.state.break != 0) {
        this.setState(state =>({
          break: state.break - 1
        }));
      } else {
          this.setState({
            break: 0
          });
      }
    }

    increment() {
      this.setState(state =>({
        break: state.break + 1
      }));
    }
      
    render() {
      return (
          <div>
            <button id={this.props.name + "-decrement"} onClick={this.decrement}></button>
            <div id={this.props.name + "-length"}>{this.state.break}</div>
            <button id={this.props.name + "-increment"} onClick={this.increment}></button>
         </div>
      )
    }
}

export default Period;