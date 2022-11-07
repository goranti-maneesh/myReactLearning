// Write your code here
import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {
    isSubscribe: true,
  }

  renderSubButton = () => {
    const {isSubscribe} = this.state

    if (isSubscribe === true) {
      return (
        <button type="button" className="button">
          Subscribe
        </button>
      )
    }
    return (
      <button type="button" className="button">
        Subscribed
      </button>
    )
  }

  render() {
    return (
      <div className="subscribe-container">
        <h1 className="heading">Welcome</h1>

        <p className="description">Thank you! Happy Learning</p>

        {this.renderSubButton()}
      </div>
    )
  }
}

export default Welcome
