import {Component} from 'react'
import {Link} from 'react-router-dom'
import {HiHome} from 'react-icons/hi'

import {SiYoutubegaming, SiTinder} from 'react-icons/si'

import {BiListPlus} from 'react-icons/bi'

import {
  SidebarContainer,
  NavItemsListContainer,
  NavListItem,
  NavItemText,
  ContactHeading,
  IconsContainer,
  ContactIcon,
  BottomSectionContainer,
} from './styledComponents'

import NxtContext from '../../context/NxtContext'

import './index.css'

const activeItems = {
  initial: 'INITIAL',
  home: 'HOME',
  trending: 'TRENDING',
  gaming: 'GAMING',
  savedVideos: 'SAVEDVIDEOS',
}

class Sidebar extends Component {
  state = {
    homeItem: false,
    trendingItem: false,
    gamingItem: false,
    savedItem: false,
  }

  onClickHomeRoute = () => {
    this.setState({homeItem: true})
  }

  render() {
    const {homeItem, gamingItem, savedItem, trendingItem} = this.state

    return (
      <NxtContext.Consumer>
        {value => {
          const {themeChange, changeActiveMenu, activeMenu} = value

          const sidebarTheme = themeChange ? '#231f20' : '#ffffff'

          const navItem = themeChange ? '#ffffff' : '#231f20'

          const navIcon = themeChange ? 'dark-nav-icon' : 'nav-icon'

          const contactHeading = themeChange ? '#ffffff' : '#181818'

          const isTrue = themeChange && homeItem

          const listItemBgColor = isTrue && '#383838'

          return (
            <SidebarContainer sideBgColor={sidebarTheme}>
              <NavItemsListContainer>
                <Link to="/" className="link-element">
                  <NavListItem
                    iconColor={
                      activeMenu === activeItems.home ? '#ff0000' : '#606060'
                    }
                    bgColor={
                      activeMenu === activeItems.home && themeChange
                        ? '#424242'
                        : ''
                    }
                    onClick={() => changeActiveMenu(activeItems.home)}
                  >
                    <HiHome className={navIcon} />
                    <NavItemText
                      weight={activeMenu === activeItems.home ? 'bold' : ''}
                      navItemcolor={navItem}
                    >
                      Home
                    </NavItemText>
                  </NavListItem>
                </Link>

                <Link to="/trending" className="link-element">
                  <NavListItem
                    iconColor={
                      activeMenu === activeItems.trending
                        ? '#ff0000'
                        : '#606060'
                    }
                    onClick={() => changeActiveMenu(activeItems.trending)}
                    bgColor={
                      activeMenu === activeItems.trending && themeChange
                        ? '#424242'
                        : ''
                    }
                  >
                    <SiTinder className={navIcon} />
                    <NavItemText
                      weight={activeMenu === activeItems.trending ? 'bold' : ''}
                      navItemcolor={navItem}
                    >
                      Trending
                    </NavItemText>
                  </NavListItem>
                </Link>

                <Link to="/gaming" className="link-element">
                  <NavListItem
                    iconColor={
                      activeMenu === activeItems.gaming ? '#ff0000' : '#606060'
                    }
                    onClick={() => changeActiveMenu(activeItems.gaming)}
                    bgColor={
                      activeMenu === activeItems.gaming && themeChange
                        ? '#424242'
                        : ''
                    }
                  >
                    <SiYoutubegaming className={navIcon} />
                    <NavItemText
                      weight={activeMenu === activeItems.gaming ? 'bold' : ''}
                      navItemcolor={navItem}
                    >
                      Gaming
                    </NavItemText>
                  </NavListItem>
                </Link>

                <Link to="/saved-videos" className="link-element">
                  <NavListItem
                    iconColor={
                      activeMenu === activeItems.savedVideos
                        ? '#ff0000'
                        : '#606060'
                    }
                    onClick={() => changeActiveMenu(activeItems.savedVideos)}
                    bgColor={
                      activeMenu === activeItems.savedVideos && themeChange
                        ? '#424242'
                        : ''
                    }
                  >
                    <BiListPlus className={navIcon} />
                    <NavItemText
                      weight={
                        activeMenu === activeItems.savedVideos ? 'bold' : ''
                      }
                      navItemcolor={navItem}
                    >
                      Saved videos
                    </NavItemText>
                  </NavListItem>
                </Link>
              </NavItemsListContainer>
              <BottomSectionContainer>
                <ContactHeading contactColor={contactHeading}>
                  CONTACT US
                </ContactHeading>
                <IconsContainer>
                  <ContactIcon
                    alt="facebook logo"
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  />

                  <ContactIcon
                    alt="twitter logo"
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  />

                  <ContactIcon
                    alt="linked in logo"
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  />
                </IconsContainer>
                <ContactHeading contactColor={contactHeading}>
                  Enjoy! Now to see your channels and recommendations!
                </ContactHeading>
              </BottomSectionContainer>
            </SidebarContainer>
          )
        }}
      </NxtContext.Consumer>
    )
  }
}

export default Sidebar
