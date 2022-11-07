// Write your code here
import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">The Button has been clicked {count} times</h1>

        <div className="container">
          <p className="paragraph">Click the Button to increase the count!</p>

          <button className="button" onClick={this.onIncrement}>
            Click Me
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
