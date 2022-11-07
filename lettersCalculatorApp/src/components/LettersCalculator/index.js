// Write your code here.
import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {
    searchInput: '',

    count: 0,
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })

    this.setState(prevState => ({count: prevState.count + 1}))
  }

  updateSearchInput = value => {
    this.setState({
      searchInput: value,
    })
  }

  render() {
    const {searchInput, count} = this.state

    return (
      <div className="bg-container">
        <div className="card">
          <div className="card-container">
            <h1 className="heading">
              Calculate the <br />
              Letters you <br />
              enter
            </h1>

            <label htmlFor="search-bar" className="desc">
              Enter the phrase
            </label>

            <input
              id="search-bar"
              type="text"
              placeholder="Enter the phrase"
              className="input-edit"
              onChange={this.onChangeSearchInput}
              value={searchInput}
            />

            <div className="counter">
              <p className="counter-desc">No.of letters: {count}</p>
            </div>
          </div>

          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="image-edit"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
