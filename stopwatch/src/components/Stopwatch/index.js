// Write your code here
import {Component} from 'react'

import './index.css'

class StopWatch extends Component {
  state = {isStarted: false, seconds: 0, minutes: 0}

  timer = () => {
    const {seconds} = this.state
    if (seconds === 59) {
      this.setState(prevState => ({seconds: 0, minutes: prevState.minutes + 1}))
    } else {
      this.setState(prevState => ({seconds: prevState.seconds + 1}))
    }
  }

  startTimerFunc = () => {
    this.timerId = setInterval(this.timer, 1000)
    this.setState(prevState => ({isStarted: !prevState.isStarted}))
  }

  resetTimer = () => {
    clearInterval(this.timerId)
    this.setState({isStarted: false, seconds: 0, minutes: 0})
  }

  stopTimer = () => {
    clearInterval(this.timerId)
    this.setState(prevState => ({isStarted: !prevState.isStarted}))
  }

  render() {
    const {isStarted, minutes, seconds} = this.state

    const displayMinutes = minutes < 10 ? `0${minutes}` : minutes
    const displaySeconds = seconds < 10 ? `0${seconds}` : seconds

    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="main-heading">Stopwatch</h1>
          <div className="timer-container">
            <div className="timer-header">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="stopwatch-img"
              />
              <p className="timer-name">Timer</p>
            </div>
            <div className="timer">
              <h1 className="timer-number">
                {displayMinutes}:{displaySeconds}
              </h1>
            </div>
            <div className="timer-buttons-container">
              <button
                type="button"
                className="btn start-btn"
                onClick={this.startTimerFunc}
                disabled={isStarted}
              >
                Start
              </button>
              <button
                type="button"
                className="btn stop-btn"
                onClick={this.stopTimer}
              >
                Stop
              </button>
              <button
                type="button"
                className="btn reset-btn"
                onClick={this.resetTimer}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default StopWatch
