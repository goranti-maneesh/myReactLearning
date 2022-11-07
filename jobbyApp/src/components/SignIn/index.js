import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class SignIn extends Component {
  state = {
    userMsg: '',
    errorMsg: '',
    username: '',
    gender: '',
    location: '',
    password: '',
  }

  getUsername = event => {
    this.setState({username: event.target.value})
  }

  getGender = event => {
    this.setState({gender: event.target.value})
  }

  getLocation = event => {
    this.setState({location: event.target.value})
  }

  getPassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitBtn = async event => {
    event.preventDefault()
    const {username, location, gender, password} = this.state
    const userDetails = {
      username,
      location,
      gender,
      password,
    }
    const url = 'https://sekharslogin.herokuapp.com/register/'
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userDetails),
    }
    const signResponse = await fetch(url, options)
    const signData = await signResponse.json()
    console.log(signData)
    if (signResponse.ok === true) {
      this.setState({userMsg: signData.user_msg, errorMsg: ''})
    } else {
      this.setState({errorMsg: signData.error_msg, userMsg: ''})
    }
  }

  render() {
    const {userMsg, errorMsg} = this.state
    return (
      <div className="sign-in-container">
        <form className="sign-inform-container" onSubmit={this.onSubmitBtn}>
          <label htmlFor="name">username</label>
          <input onChange={this.getUsername} type="text" id="name" />
          <label htmlFor="gender">Gender</label>
          <input onChange={this.getGender} type="text" id="gender" />
          <label htmlFor="location">Location</label>
          <input onChange={this.getLocation} type="text" id="location" />
          <label htmlFor="password">Create Password</label>
          <input onChange={this.getPassword} type="password" id="password" />
          <button type="submit" className="login-btn">
            Create
          </button>
          <p className="errorMsg">{errorMsg}</p>
          <p className="success-signin">{userMsg}</p>
        </form>
      </div>
    )
  }
}
export default SignIn
