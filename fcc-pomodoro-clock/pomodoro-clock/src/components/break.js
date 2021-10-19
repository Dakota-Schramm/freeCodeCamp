

class Break extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        break: 5
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
          <div id="break-label"> Break
            <button id="break-decrement" onClick={this.decrement}></button>
            <div id="break-length">{this.state.break}</div>
            <button id="break-increment" onClick={this.increment}></button>
         </div>
      )
    }
}

export default Break;