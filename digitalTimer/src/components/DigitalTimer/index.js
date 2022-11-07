// Write your code here
import {Component} from 'react'

import './index.css'

class DigitalTimer extends Component {
  state = {minutes: 25, seconds: 0, isStarted: false}

  timerFunc = () => {
    const {minutes, seconds} = this.state
    if (seconds === 0 && minutes !== 0) {
      this.setState(prevState => ({
        minutes: prevState.minutes - 1,
        seconds: 59,
      }))
    } else if (seconds === 0 && minutes === 0) {
      clearInterval(this.intervalId)
      this.setState({isStarted: false})
    } else {
      this.setState(prevState => ({seconds: prevState.seconds - 1}))
    }
  }

  startOrStopTimerFunc = () => {
    const {isStarted} = this.state

    if (!isStarted) {
      this.setState(prevState => ({isStarted: !prevState.isStarted}))
      this.intervalId = setInterval(this.timerFunc, 1000)
    } else {
      clearInterval(this.intervalId)
      this.setState(prevState => ({isStarted: !prevState.isStarted}))
    }
  }

  resetTimerFunc = () => {
    clearInterval(this.intervalId)
    this.setState({minutes: 25, seconds: 0, isStarted: false})
  }

  IncrementTimer = () => {
    const {isStarted} = this.state
    if (!isStarted) {
      this.setState(prevState => ({minutes: prevState.minutes + 1}))
    }
  }

  DecrementTimer = () => {
    const {isStarted, minutes} = this.state
    if (!isStarted && minutes > 0) {
      this.setState(prevState => ({minutes: prevState.minutes - 1}))
    }
  }

  render() {
    const {minutes, seconds, isStarted} = this.state

    const displayMinutes = minutes < 10 ? `0${minutes}` : minutes
    const displaySeconds = seconds < 10 ? `0${seconds}` : seconds
    let timerControlUrl =
      'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'
    let altText = 'play icon'
    let timerControlText = 'Start'
    let timerStatusText = 'Paused'
    if (isStarted) {
      timerControlUrl =
        'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'
      altText = 'pause icon'
      timerControlText = 'Pause'
      timerStatusText = 'Running'
    }
    return (
      <div className="bg-container">
        <div className="card">
          <div>
            <h1 className="main-heading">Digital Timer</h1>
          </div>
          <div className="timer">
            <div className="timer-display-container">
              <div className="timer-number-container">
                <h1 className="timer-numbers">{`${displayMinutes}:${displaySeconds}`}</h1>
                <p className="timer-status">{timerStatusText}</p>
              </div>
            </div>
            <div className="timer-controls-container">
              <div className="control-reset-container">
                <div className="control-button-container">
                  <button
                    className="control-btn control-button-container"
                    type="button"
                    onClick={this.startOrStopTimerFunc}
                  >
                    <img
                      src={timerControlUrl}
                      alt={altText}
                      className="btn-img"
                    />
                    <p className="control-text">{timerControlText}</p>
                  </button>
                </div>
                <div className="control-button-container">
                  <button
                    className="control-btn control-button-container"
                    type="button"
                    onClick={this.resetTimerFunc}
                  >
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                      alt="reset icon"
                      className="btn-img"
                    />
                    <p className="control-text">Reset</p>
                  </button>
                </div>
              </div>
              <div className="time-change-btn-container">
                <button
                  className="time-change-btn "
                  type="button"
                  onClick={this.DecrementTimer}
                >
                  -
                </button>
                <div className="timer-limit-container">
                  <p className="set-timer-limit">Set Timer limit</p>
                  <p className="timer-limit">{displayMinutes}</p>
                </div>
                <button
                  className="time-change-btn"
                  type="button"
                  onClick={this.IncrementTimer}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
