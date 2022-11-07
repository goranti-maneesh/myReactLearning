import React from 'react'

const activeItems = {
  initial: 'INITIAL',
  home: 'HOME',
  trending: 'TRENDING',
  gaming: 'GAMING',
  savedVideos: 'SAVEDVIDEOS',
}

const NxtContext = React.createContext({
  themeChange: false,
  activeMenu: activeItems.home,
  changeActiveMenu: () => {},

  onChangeTheme: () => {},
  savedVideosList: [],
  addingVideos: () => {},
  isVideoSaved: false,
})

export default NxtContext
