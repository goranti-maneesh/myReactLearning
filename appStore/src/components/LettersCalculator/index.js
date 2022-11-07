import './index.css'
import {Component} from 'react'

class LettersCalculator extends Component {
  state = {
    inpu: '',
  }

  onChange = event => {
    this.setState({inpu: event.target.value})
  }

  onClick = () => {
    this.setState({inpu: ''})
  }

  render() {
    const {inpu} = this.state
    console.log(inpu)
    const lengthOfInput = inpu.length

    return (
      <div className="bg-container">
        <div className="c-container">
          <h1>Calculate The Letters You Enter</h1>
          <label htmlFor="inp">Enter the pharse</label>
          <input type="text" id="inp" onChange={this.onChange} value={inpu} />
          <button type="button" onClick={this.onClick} className="button">
            No of Letters : {lengthOfInput}
          </button>
        </div>
        <div className="img-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png "
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
