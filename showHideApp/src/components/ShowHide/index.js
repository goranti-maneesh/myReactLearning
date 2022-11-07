// Write your code here

import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {
    showAndHideFirstName: false,
    showAndHideLastName: false,
  }

  firstName = () => {
    this.setState(prevState => ({
      showAndHideFirstName: !prevState.showAndHideFirstName,
    }))
  }

  lastName = () => {
    this.setState(prevState => ({
      showAndHideLastName: !prevState.showAndHideLastName,
    }))
  }
  render() {
    const {showAndHideFirstName, showAndHideLastName} = this.state

    return (
      <div className="container">
        <h1> Show/Hide</h1>
        <div className="button">
          <div className="name-button">
            <button
              type="button"
              alt=""
              className="button1"
              onClick={this.firstName}
            >
              Show/Hide Firstname
            </button>
            {showAndHideFirstName && <p> Joe</p>}
          </div>

          <div>
            <button alt="" type="button" onClick={this.lastName}>
              Show/Hide Lastname
            </button>
            {showAndHideLastName && <p> Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
