import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {username: '', password: ''}

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = () => {
    const history = this.props
    history.replace('/')
  }

  onSubmit = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const {userDetails} = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    console.log(response)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess()
    }
  }

  render() {
    const {username, password} = this.state
    return (
      <div className="login-container">
        <div className="login-image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
            className="login-image"
          />
        </div>
        <form onSubmit={this.onSubmit}>
          <div className="login-details-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
              className="logo-image"
            />
            <div className="username-container">
              <label htmlFor="username" className="label">
                USERNAME
              </label>
              <input
                type="text"
                id="username"
                placeholder="Username"
                value={username}
                onChange={this.onChangeUsername}
              />
            </div>
            <div className="password-container">
              <label htmlFor="password" className="label">
                PASSWORD
              </label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={this.onChangePassword}
              />
              <button type="submit" className="login-button">
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default LoginForm
