import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {
    minutes: 0,
    seconds: 0,
    isTimerRunning: false,
  }

  componentDidMount() {
    this.TimerId = setInterval(this.startRunningTime, 1000)
  }

  startRunningTime = () => {
    const {minutes, seconds, isTimerRunning} = this.state
    const rSec = minutes * 60 + 1 + seconds
    const min = Math.floor(rSec / 60)
    const sec = Math.floor(rSec % 60)
    if (isTimerRunning === true) {
      this.setState({minutes: min, seconds: sec})
    }
  }

  onClickStartTimer = () => {
    this.setState(prevState => ({isTimerRunning: !prevState.isTimerRunning}))
  }

  onClickStopTimer = () => {
    this.setState(prevState => ({isTimerRunning: !prevState.isTimerRunning}))
  }

  onClickResetTimer = () => {
    this.setState({minutes: 0, seconds: 0, isTimerRunning: false})
  }

  render() {
    const {minutes, seconds, isTimerRunning} = this.state
    console.log(minutes, seconds)
    const strMinutes = minutes > 9 ? minutes : `0${minutes}`
    const strSeconds = seconds > 9 ? seconds : `0${seconds}`
    return (
      <div className="container">
        <h1 className="heading">Stopwatch</h1>
        <div className="stopwatch-container">
          <div className="clock-img-flex-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="clock-img"
            />
            <p className="clock-img-text">Timer</p>
          </div>
          <div className="showStopWatch-container">
            <h1 className="time">
              {strMinutes}:{strSeconds}
            </h1>
          </div>
          <div className="control-btn-container">
            <button
              disabled={isTimerRunning === true}
              onClick={this.onClickStartTimer}
              className="start-btn"
              type="button"
            >
              Start
            </button>
            <button
              disabled={isTimerRunning === false}
              onClick={this.onClickStopTimer}
              className="stop-btn"
              type="button"
            >
              Stop
            </button>
            <button
              disabled={isTimerRunning === true}
              onClick={this.onClickResetTimer}
              className="reset-btn"
              type="button"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
