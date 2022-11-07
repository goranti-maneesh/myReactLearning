// Write your code here
import './index.css'
import {Component} from 'react'

class Speedometer extends Component {
  state = {speed: 0}

  onClickApplyBreakButton = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  onClickAccelerateButton = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="speedometer-container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="image"
        />
        <h1 className="speed-heading">Speed is {speed}mph</h1>
        <p className="paragraph">Min limit is 0mph,Max limit is 200mph</p>
        <div className="button-container">
          <button
            type="button"
            className="accelerate-button"
            onClick={this.onClickAccelerateButton}
          >
            Accelerate
          </button>
          <button
            type="button"
            className="apply-brake-button"
            onClick={this.onClickApplyBreakButton}
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
