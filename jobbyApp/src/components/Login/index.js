import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect, Link} from 'react-router-dom'

import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', errorMsg: ''}

  getUsername = event => {
    this.setState({username: event.target.value})
  }

  getUserPassword = event => {
    this.setState({password: event.target.value})
  }

  onSuccessSubmit = jwtToken => {
    const {history} = this.props
    Cookies.set(
      'jwt_token',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MjMwNjU1MzJ9.D13s5wN3Oh59aa_qtXMo3Ec4wojOx0EZh8Xr5C5sRkU',
      {expires: 3},
    )
    history.replace('/')
  }

  onSubmitBtn = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userDetails),
    }
    const url = 'https://sekharslogin.herokuapp.com/login'

    const response = await fetch(url, options)

    const data = await response.json()
    console.log(response, data)

    if (response.ok === true) {
      this.onSuccessSubmit(data.jwt_token)
    } else {
      this.setState({errorMsg: data.user_msg})
    }
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    const {errorMsg} = this.state
    return (
      <div className="login-container">
        <div className="login-card-container">
          <img
            className="login-logo-img"
            alt="website logo"
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png "
          />
          <form onSubmit={this.onSubmitBtn} className="form-container">
            <label htmlFor="username">Username</label>
            <input
              onChange={this.getUsername}
              type="text"
              id="username"
              placeholder="Username"
            />
            <label htmlFor="password">Password</label>
            <input
              onChange={this.getUserPassword}
              type="password"
              id="password"
              placeholder="password"
            />
            <button type="submit" className="login-btn">
              Login
            </button>
            <Link to="/sign-in">
              <button
                onClick={this.onClickSignIn}
                type="button"
                className="sigin-btn"
              >
                Sign in
              </button>
            </Link>
          </form>
          <p className="error-msg">{errorMsg}</p>
        </div>
      </div>
    )
  }
}
export default LoginForm
