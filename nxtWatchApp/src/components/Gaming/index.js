import {Component} from 'react'

import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'

import {SiYoutubegaming} from 'react-icons/si'

import Header from '../Header'

import Sidebar from '../Sidebar'
import NxtContext from '../../context/NxtContext'

import GamingVideoItem from '../GamingVideoItem'

import {
  GamingBgContainer,
  GamingContainer,
  GamingHeaderContainer,
  GamingIconContainer,
  GamingHeaderHeading,
  GamingVideosContainer,
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureText,
  FailureButton,
} from './styledComponents'

import './index.css'

const apiConstants = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Gaming extends Component {
  state = {
    gamingVideos: [],

    apiStatus: apiConstants.inProgress,
  }

  componentDidMount() {
    this.getGamingDetails()
  }

  getGamingDetails = async () => {
    this.setState({apiStatus: apiConstants.inProgress})
    const gamingUrl = 'https://apis.ccbp.in/videos/gaming'

    const jwtToken = Cookies.get('jwt_token')

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(gamingUrl, options)

    const data = await response.json()

    const gamingData = data.videos.map(item => ({
      id: item.id,
      thumbnailUrl: item.thumbnail_url,
      title: item.title,
      viewsCount: item.view_count,
    }))

    if (response.ok === true) {
      this.setState({gamingVideos: gamingData, apiStatus: apiConstants.success})
    } else if (response.status === 401) {
      this.setState({apiStatus: apiConstants.failure})
    }
  }

  onRenderApi = () => {
    this.setState(this.getGamingDetails)
  }

  renderLoader = () => (
    <NxtContext.Consumer>
      {value => {
        const {themeChange} = value
        const loaderColor = themeChange ? '#ffffff' : '#00306e'

        return (
          <div className="loader-container loader" data-testid="loader">
            <Loader
              type="ThreeDots"
              color={loaderColor}
              height="50"
              width="50"
            />
          </div>
        )
      }}
    </NxtContext.Consumer>
  )

  renderTrendingFailure = () => (
    <NxtContext.Consumer>
      {value => {
        const {themeChange} = value

        const conatinerBg = themeChange ? '#0f0f0f' : '#ffffff'

        const failureHead = themeChange ? '#ffffff' : '#0f0f0f'

        const failureImage = themeChange
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        const noviewText = themeChange ? '#64748b' : '#94a3b8'

        return (
          <FailureContainer failureBgColor={conatinerBg}>
            <FailureImage alt="failure view" src={failureImage} />
            <FailureHeading failureHeading={failureHead}>
              Oops! Something Went Wrong
            </FailureHeading>
            <FailureText failureText={noviewText}>
              We are having some trouble
            </FailureText>
            <FailureButton onClick={this.onRenderApi}>Retry</FailureButton>
          </FailureContainer>
        )
      }}
    </NxtContext.Consumer>
  )

  renderSuccessView = () => {
    const {gamingVideos} = this.state

    return (
      <NxtContext.Consumer>
        {value => {
          const {themeChange} = value

          const headerBgColor = themeChange ? '#231f20' : '#ffffff'

          const iconBg = themeChange ? '#000000' : '#e2e8f0'

          const titleHeading = themeChange ? '#ffffff' : '#181818'

          const headerBg = themeChange ? '#231f20' : '#ffffff'

          const gamingColor = themeChange ? '#0f0f0f' : '#ffffff'

          return (
            <>
              <GamingHeaderContainer headerBgColor={headerBg}>
                <GamingIconContainer bgColor={iconBg}>
                  <SiYoutubegaming className="icon" />
                </GamingIconContainer>
                <GamingHeaderHeading headColor={titleHeading}>
                  Gaming
                </GamingHeaderHeading>
              </GamingHeaderContainer>
              <GamingVideosContainer>
                {gamingVideos.map(video => (
                  <GamingVideoItem video={video} key={video.id} />
                ))}
              </GamingVideosContainer>
            </>
          )
        }}
      </NxtContext.Consumer>
    )
  }

  renderGamingView = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiConstants.inProgress:
        return this.renderLoader()
      case apiConstants.success:
        return this.renderSuccessView()
      case apiConstants.failure:
        return this.renderTrendingFailure()
      default:
        return null
    }
  }

  render() {
    const {gamingVideos} = this.state
    return (
      <NxtContext.Consumer>
        {value => {
          const {themeChange} = value

          const headerBgColor = themeChange ? '#231f20' : '#ffffff'

          const iconBg = themeChange ? '#000000' : '#e2e8f0'

          const titleHeading = themeChange ? '#ffffff' : '#181818'

          const headerBg = themeChange ? '#231f20' : '#ffffff'

          const gamingColor = themeChange ? '#0f0f0f' : '#f9f9f9'

          return (
            <>
              <Header />
              <GamingBgContainer>
                <Sidebar />

                <GamingContainer
                  data-testid="gaming"
                  gamingBgColoR={gamingColor}
                >
                  {this.renderGamingView()}
                </GamingContainer>
              </GamingBgContainer>
            </>
          )
        }}
      </NxtContext.Consumer>
    )
  }
}

export default Gaming
