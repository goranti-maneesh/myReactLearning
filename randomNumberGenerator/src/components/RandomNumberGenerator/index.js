// Write your code here

import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  generateRandomNumber = () => Math.ceil(Math.random() * 100)

  onGenerateNumber = () => {
    const randomNumber = this.generateRandomNumber()

    this.setState(prevState => ({
      count: randomNumber,
    }))
  }

  render() {
    const {count} = this.state
    console.log(count)

    return (
      <div className="app-container">
        <div className="random-number-container">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            className="button"
            type="button"
            onClick={this.onGenerateNumber}
          >
            Generate
          </button>
          <p className="number">{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
