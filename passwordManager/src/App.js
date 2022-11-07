import {Component} from 'react'
import {v4} from 'uuid'
import PasswordItem from './components/PasswordItem'
import './App.css'

const initialContainerBackgroundColors = [
  'yellow',
  'green',
  'orange',
  'light-blue',
  'red',
  'white',
]

class App extends Component {
  state = {
    websiteInput: '',
    usernameInput: '',
    passwordInput: '',
    passwordDetailsList: [],
    searchPassword: '',
    isChecked: false,
  }

  onChangeWebsite = event => {
    this.setState({websiteInput: event.target.value})
  }

  onChangeUsername = event => {
    this.setState({usernameInput: event.target.value})
  }

  onChangePassword = event => {
    this.setState({passwordInput: event.target.value})
  }

  onChangeSearchPassword = event => {
    this.setState({searchPassword: event.target.value})
  }

  toggleActiveStatus = () => {
    this.setState(prevState => ({isChecked: !prevState.isChecked}))
  }

  onDelete = id => {
    const {passwordDetailsList} = this.state
    const filteredPasswordList = passwordDetailsList.filter(
      each => each.id !== id,
    )

    this.setState({passwordDetailsList: filteredPasswordList})
  }

  addPasswords = event => {
    event.preventDefault()
    const {websiteInput, usernameInput, passwordInput} = this.state

    const initialBackgroundColors = `initial-container ${
      initialContainerBackgroundColors[
        Math.ceil(Math.random() * initialContainerBackgroundColors.length - 1)
      ]
    }`
    console.log(initialBackgroundColors)
    const newPassword = {
      id: v4(),
      website: websiteInput,
      username: usernameInput,
      password: passwordInput,
      initialBackgroundClassName: initialBackgroundColors,
    }

    this.setState(prevState => ({
      passwordDetailsList: [...prevState.passwordDetailsList, newPassword],
      websiteInput: '',
      usernameInput: '',
      passwordInput: '',
    }))
  }

  render() {
    const {
      passwordDetailsList,
      searchPassword,
      isChecked,
      websiteInput,
      usernameInput,
      passwordInput,
    } = this.state

    const searchedPasswordList = passwordDetailsList.filter(eachPassword =>
      eachPassword.website.toLowerCase().includes(searchPassword.toLowerCase()),
    )

    const isPasswordsPresent = searchedPasswordList.length > 0

    return (
      <div className="app-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="logo-img"
        />
        <div className="input-container">
          <form className="input-inner-card" onSubmit={this.addPasswords}>
            <h1 className="password-heading">Add New Password</h1>
            <div className="input-field">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
                className="input-img"
              />
              <input
                placeholder="Enter Website"
                type="text"
                value={websiteInput}
                className="input-text"
                onChange={this.onChangeWebsite}
              />
            </div>
            <div className="input-field">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
                className="input-img"
              />
              <input
                placeholder="Enter Username"
                type="text"
                value={usernameInput}
                className="input-text"
                onChange={this.onChangeUsername}
              />
            </div>
            <div className="input-field">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
                className="input-img"
              />
              <input
                placeholder="Enter Password"
                type="password"
                value={passwordInput}
                className="input-text"
                onChange={this.onChangePassword}
              />
            </div>
            <div className="btn-container">
              <button type="submit" className="add-btn">
                Add
              </button>
            </div>
          </form>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
              className="password-manager-img"
            />
          </div>
        </div>
        <div className="password-details-container">
          <div className="count-search-container">
            <h1 className="password-count-text">
              Your Passwords{' '}
              <p className="password-count">{searchedPasswordList.length}</p>
            </h1>
            <div className="input-field search-input-field">
              <img
                type="image"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="input-img"
              />
              <input
                type="search"
                placeholder="Search"
                className="input-text search-input"
                onChange={this.onChangeSearchPassword}
              />
            </div>
          </div>
          <hr className="hr-line" />
          <div className="checkbox-container">
            <input
              id="search-box"
              type="checkbox"
              value="Show Passwords"
              checked={isChecked}
              onChange={this.toggleActiveStatus}
            />
            <label htmlFor="search-box" className="label-text">
              Show Passwords
            </label>
          </div>
          {isPasswordsPresent && (
            <ul>
              {searchedPasswordList.map(eachPassword => (
                <PasswordItem
                  key={eachPassword.id}
                  passwordDetails={eachPassword}
                  isChecked={isChecked}
                  deletePasswordDetails={this.onDelete}
                />
              ))}
            </ul>
          )}
          {!isPasswordsPresent && (
            <ul className="no-password-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt="no passwords"
                className="no-passwords-img"
              />
              <p className="no-passwords-text">No Passwords</p>
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default App
