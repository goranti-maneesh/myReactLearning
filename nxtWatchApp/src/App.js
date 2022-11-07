import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'

import Login from './components/Login'
import Header from './components/Header'
import Home from './components/Home'
import NxtContext from './context/NxtContext'
import ProtectedRoute from './components/ProtectedRoute'

import VideoItemDetails from './components/VideoItemDetails'
import Trending from './components/Trending'
import Gaming from './components/Gaming'

import SavedVideos from './components/SavedVideos'

import NotFound from './components/NotFound'
import './App.css'

const activeItems = {
  initial: 'INITIAL',
  home: 'HOME',
  trending: 'TRENDING',
  gaming: 'GAMING',
  savedVideos: 'SAVEDVIDEOS',
}

// Replace your code here
class App extends Component {
  state = {
    themeChange: false,
    activeMenu: activeItems.home,

    savedVideosList: [],
    savedVideoStatus: false,
    isVideoSaved: false,
  }

  onChangeTheme = () => {
    this.setState(prevState => ({themeChange: !prevState.themeChange}))
  }

  addVideoToList = video => {
    const {savedVideosList} = this.state

    const isVideoPresent = savedVideosList.every(item => item.id === video.id)

    this.setState(prevState => ({
      savedVideosList: [...prevState.savedVideosList, video],
    }))
  }

  removeVideoFromList = async video => {
    const {savedVideosList} = this.state

    const filteredResults = savedVideosList.filter(item => item.id !== video.id)

    this.setState({savedVideosList: filteredResults, savedVideoStatus: false})
  }

  addVideoItem = video => {
    const {isVideoSaved} = this.state

    if (isVideoSaved) {
      console.log('remove')
      this.removeVideoFromList(video)
    } else {
      console.log('add')
      this.addVideoToList(video)
    }
  }

  addingVideos = video => {
    this.setState(prevState => ({
      isVideoSaved: !prevState.isVideoSaved,
    }))
    this.addVideoItem(video)
  }

  changeActiveMenu = value => {
    this.setState({activeMenu: value})
  }

  render() {
    const {themeChange, activeMenu, isVideoSaved, savedVideosList} = this.state

    return (
      <NxtContext.Provider
        value={{
          themeChange,
          savedVideosList,
          isVideoSaved,
          activeMenu,
          changeActiveMenu: this.changeActiveMenu,

          onChangeTheme: this.onChangeTheme,
          addingVideos: this.addingVideos,
          addVideoItem: this.addVideoItem,
          removeVideoFromList: this.removeVideoFromList,
          addVideoToList: this.addVideoToList,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <Route exact component={NotFound} />
        </Switch>
      </NxtContext.Provider>
    )
  }
}

export default App
