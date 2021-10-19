import Buttons from 'components/buttons'
import Timer from 'components/timer'

class Pomodoro extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div> 
          <h1 id="title">Pomodoro Timer</h1>
          <Buttons />
          <Timer />
        </div>
      )
    }
  }
export default Pomodoro;