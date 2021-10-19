class Session extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        session: 25
      }
      this.decrement = this.decrement.bind(this);
      this.increment = this.increment.bind(this);
     }
    decrement() {
      if (this.state.session != 0) {
        this.setState(state =>({
          session: state.session - 1
        }));
      } else {
          this.setState({
            session: 0
          });
      }
    }
    increment() {
      this.setState(state =>({
        session: state.session + 1
      }));
    }
    render() {
      return (
          <div id="session-label"> Session
              <button id="session-decrement" onClick={this.decrement}></button>
              <div id="session-length">{this.state.session}</div>
              <button id="session-increment" onClick={this.increment}></button>
          </div> 
      )
    }
  }

export default Session;