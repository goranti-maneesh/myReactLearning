// Write your code here
import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {Count: 0}

  onIncrement = () => {
    this.setState(prevState => ({
      Count: prevState(Math.random() * 100).Count,
    }))
  }

  render() {
    const {Count} = this.state

    const paragraphText = Count % 2 === 0 ? 'Count is even' : 'Count is odd'

    return (
      <div className="container">
        <div className="card-container">
          <h1>Count {Count}</h1>

          <p>{paragraphText}</p>

          <div className="button-container">
            <button
              type="button"
              className="button"
              onClick={this.onIncrement()}
            >
              Increment
            </button>
          </div>

          <p>* Increase By random number between o to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
