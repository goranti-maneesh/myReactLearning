import {Component, Redirect} from 'react'
import cookies from 'js-cookie'
import './index.css'

class Login extends Component {
  state = {username: 'rahul', password: 'rahul@2021'}

  onSubmitSuccess = jwtToken => {
    console.log(jwtToken)
    cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  onClickButton = async () => {
    const url = 'https://apis.ccbp.in/login'
    const {username, password} = this.state
    const userDetails = {username, password}
    const option = {method: 'POST', body: JSON.stringify(userDetails)}
    const response = await fetch(url, option)
    const data = await response.json()
    console.log(response)
    console.log(data)
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      const {history} = this.props
      history.replace('/login')
    }
  }

  render() {
    return (
      <div className="login-container">
        <h1 className="login-heading">Please Login</h1>
        <button
          type="submit"
          className="login-button"
          onClick={this.onClickButton}
        >
          Login with Sample Creds
        </button>
      </div>
    )
  }
}
export default Login
