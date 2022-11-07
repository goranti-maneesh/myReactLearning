import {Component} from 'react'
import './App.css'

class Header extends Component {
  state = {timer: 60, checkValue: true}

  componentDidMount() {
    console.log('hello')
    this.timer = setInterval(() => {
      this.setState(prevState => ({
        timer: prevState.timer - 1,
      }))
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
    const {scoreProp, gameOverProp, gameOverValueProp} = this.props
    const {timer, checkValue} = this.state

    if (gameOverValueProp && checkValue) {
      clearInterval(this.timer)
      this.setState({checkValue: false})
    }

    if (timer === 0 && checkValue) {
      clearInterval(this.timer)
      this.setState({checkValue: false})
      gameOverProp()
    }

    return (
      <>
        <ul className="css-header-div">
          <li>
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png "
              alt="website logo"
              className="css-header-logo-image"
            />
          </li>
          <li className="css-header-score-timer-div">
            <p className="css-header-score-heading css-header-span">
              Score:{scoreProp}
            </p>
            <div className="css-header-timer-div">
              <img
                src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
                alt="timer"
                className="css-header-timer-icon"
              />
              <p className="css-header-span">{timer} Sec</p>
            </div>
          </li>
        </ul>
      </>
    )
  }
}

export default Header
