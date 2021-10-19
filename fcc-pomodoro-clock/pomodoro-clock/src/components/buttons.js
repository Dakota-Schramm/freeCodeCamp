import Break from 'break'
import Session from 'session'

class Buttons extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      }
     }
    render() {
      return (
        <div id="buttons">
          <Break />
          <Session />
        </div>
      )
    }
  }

export default Buttons;