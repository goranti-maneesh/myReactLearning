import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import {
  LoginBgContainer,
  FormContainer,
  WebsiteLogo,
  InputContainer,
  LabelElement,
  InputElement,
  CheckboxElement,
  CheckboxContainer,
  CheckboxLabel,
  SubmitButton,
  ErrorText,
  ImageContainer,
} from './styledComponents'

import NxtContext from '../../context/NxtContext'

class Login extends Component {
  state = {
    username: '',
    password: '',
    errorMsg: '',

    isShowPassword: false,
  }

  onSuccessDetails = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onFailureDetails = errorMsg => {
    this.setState({errorMsg: `*${errorMsg}`})
  }

  onSubmitForm = async event => {
    event.preventDefault()

    const {username, password} = this.state

    const userDetails = {username, password}

    const loginUrl = 'https://apis.ccbp.in/login'

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(loginUrl, options)

    const data = await response.json()

    if (response.ok) {
      this.onSuccessDetails(data.jwt_token)
    } else {
      this.onFailureDetails(data.error_msg)
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onToggleCheck = event => {
    if (event.target.checked) {
      this.setState({isShowPassword: true})
    } else {
      this.setState({isShowPassword: false})
    }
  }

  render() {
    const {username, password, errorMsg, isShowPassword} = this.state

    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <NxtContext.Consumer>
        {value => {
          const {themeChange} = value

          const formBg = themeChange ? '#000000' : '#ffffff'

          const loginBg = themeChange ? '#212121' : '#ffffff'

          const labelClassname = themeChange ? '#ffffff' : '#64748b'

          const checkboxClassName = themeChange ? ' #e2e8f0' : '#181818'

          const loginErrorText = themeChange ? '#ff0000' : ' #ff0b37'

          const websiteLogo = themeChange
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          return (
            <LoginBgContainer bgColor={loginBg}>
              <FormContainer formBgColor={formBg} onSubmit={this.onSubmitForm}>
                <ImageContainer>
                  <WebsiteLogo alt="website logo" src={websiteLogo} />
                </ImageContainer>

                <InputContainer>
                  <LabelElement labelColor={labelClassname} htmlFor="username">
                    USERNAME
                  </LabelElement>
                  <InputElement
                    onChange={this.onChangeUsername}
                    id="username"
                    placeholder="Username"
                    type="text"
                  />
                </InputContainer>

                <InputContainer>
                  <LabelElement labelColor={labelClassname} htmlFor="password">
                    PASSWORD
                  </LabelElement>
                  <InputElement
                    onChange={this.onChangePassword}
                    id="password"
                    placeholder="Password"
                    type={isShowPassword ? 'text' : 'password'}
                  />
                </InputContainer>

                <CheckboxContainer>
                  <CheckboxElement
                    onChange={this.onToggleCheck}
                    id="showPassword"
                    type="checkbox"
                  />
                  <CheckboxLabel
                    checkColor={checkboxClassName}
                    htmlFor="showPassword"
                  >
                    Show Password
                  </CheckboxLabel>
                </CheckboxContainer>
                <SubmitButton type="submit">Login</SubmitButton>
                <ErrorText
                  errorColor={loginErrorText}
                >{`${errorMsg}`}</ErrorText>
              </FormContainer>
            </LoginBgContainer>
          )
        }}
      </NxtContext.Consumer>
    )
  }
}
export default Login
