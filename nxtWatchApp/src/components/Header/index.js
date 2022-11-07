import Cookies from 'js-cookie'
import {Link, Redirect, withRouter} from 'react-router-dom'
import {FaMoon} from 'react-icons/fa'

import {GiHamburgerMenu} from 'react-icons/gi'

import {FiLogOut} from 'react-icons/fi'

import {RiSunFill} from 'react-icons/ri'

import Popup from 'reactjs-popup'

import NxtContext from '../../context/NxtContext'

import {
  NavContainer,
  Button,
  WebsiteLogoImage,
  NavItemsContainer,
  PersonImage,
  LogoutButton,
  PopupLogoutContainer,
  PopupContainer,
  PopupButtonContainer,
  PopupText,
  PopupButton,
  PopupButton1,
} from './styledComponents'

import './index.css'

const apiActive = {
  home: 'HOME',
}

const Header = props => (
  <NxtContext.Consumer>
    {value => {
      const {themeChange, changeActiveMenu, onChangeTheme} = value

      const className = themeChange ? 'dark-hamburger-icon' : 'hamburger-icon'

      const onThemeChange = () => {
        onChangeTheme()
      }

      const websiteLogo = themeChange
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

      const navBgColor = themeChange ? '#212121' : '#f1f1f1'

      const logoutBtnColor = themeChange ? '#f8fafc' : ' #3b82f6'
      const themeIcon = themeChange ? (
        <RiSunFill className="sun-icon" />
      ) : (
        <FaMoon className="moon-icon" />
      )

      const cancelBorderColor = themeChange
        ? '1px solid #e2e8f0'
        : '1px solid  #94a3b8'

      const buttonCancelColor = themeChange ? '#e2e8f0' : '#94a3b8'

      const popupContainerClassname = themeChange ? '#212121' : '#ffffff'

      const popupText = themeChange ? '#ffffff' : '#00306e'

      const onConfirmLogout = () => {
        const {history} = props

        Cookies.remove('jwt_token')

        history.replace('/login')
      }

      return (
        <NavContainer navBgColor={navBgColor}>
          <Link to="/">
            <button
              className="button"
              onClick={() => changeActiveMenu(apiActive.home)}
            >
              <WebsiteLogoImage src={websiteLogo} alt="website logo" />
            </button>
          </Link>

          <NavItemsContainer>
            <Button data-testid="theme" onClick={onThemeChange}>
              {themeIcon}
            </Button>

            <Button>
              <GiHamburgerMenu className={className} />
            </Button>

            <PersonImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />

            <PopupLogoutContainer>
              <Popup
                modal
                trigger={
                  <Button type="button">
                    <FiLogOut className={className} />
                  </Button>
                }
                className="popup-content"
                position="center center"
              >
                {cancel => (
                  <PopupContainer popUpBgColor={popupContainerClassname}>
                    <PopupText popupTextcolor={popupText}>
                      Are you sure you want to logout?
                    </PopupText>
                    <PopupButtonContainer popupButtonBorderColor="#94a3b8">
                      <PopupButton
                        btnColor={cancelBorderColor}
                        borderWidth="1px"
                        popupButtonBgColor="transparent"
                        popupButtonColor={buttonCancelColor}
                        onClick={() => cancel()}
                      >
                        Cancel
                      </PopupButton>
                      <PopupButton1
                        popupButtonColor="#ffffff"
                        popupButtonBgColor="#3b82f6"
                        borderWidth="0px"
                        border="0px"
                        onClick={onConfirmLogout}
                      >
                        Confirm
                      </PopupButton1>
                    </PopupButtonContainer>
                  </PopupContainer>
                )}
              </Popup>
            </PopupLogoutContainer>

            <PopupLogoutContainer>
              <Popup
                modal
                trigger={
                  <LogoutButton
                    type="button"
                    logoutBorderColor={logoutBtnColor}
                    logoutColor={logoutBtnColor}
                  >
                    Logout
                  </LogoutButton>
                }
                className="popup-content"
                position="center center"
              >
                {cancel => (
                  <PopupContainer popUpBgColor={popupContainerClassname}>
                    <PopupText popupTextcolor={popupText}>
                      Are you sure, you want to logout
                    </PopupText>
                    <PopupButtonContainer popupButtonBorderColor="#94a3b8">
                      <PopupButton
                        btnColor={cancelBorderColor}
                        borderWidth="1px"
                        popupButtonBgColor="transparent"
                        popupButtonColor={buttonCancelColor}
                        onClick={() => cancel()}
                      >
                        Cancel
                      </PopupButton>
                      <PopupButton1
                        popupButtonColor="#ffffff"
                        popupButtonBgColor="#3b82f6"
                        borderWidth="0px"
                        border="0px"
                        onClick={onConfirmLogout}
                      >
                        Confirm
                      </PopupButton1>
                    </PopupButtonContainer>
                  </PopupContainer>
                )}
              </Popup>
            </PopupLogoutContainer>
          </NavItemsContainer>
        </NavContainer>
      )
    }}
  </NxtContext.Consumer>
)

export default withRouter(Header)
