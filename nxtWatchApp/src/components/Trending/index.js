import {Component} from 'react'

import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {SiTinder} from 'react-icons/si'

import Header from '../Header'
import Sidebar from '../Sidebar'

import NxtContext from '../../context/NxtContext'
import TrendingVideoItem from '../TrendingVideoItem'

import './index.css'

import {
  TrendingContainer,
  TrendingVideosContainer,
  TrendingHeaderContainer,
  TrendingIconContainer,
  TrendingHeading,
  TrendingVideos,
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureText,
  FailureButton,
} from './styledComponents'

const apiConstants = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Trending extends Component {
  state = {
    trendingVideos: [],
    apiStatus: apiConstants.initial,
  }

  componentDidMount() {
    this.getTrendingVideoDetails()
  }

  getTrendingVideoDetails = async () => {
    const rendingApiUrl = 'https://apis.ccbp.in/videos/trending'

    this.setState({apiStatus: apiConstants.inProgress})

    const jwtToken = Cookies.get('jwt_token')

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const trendingResponse = await fetch(rendingApiUrl, options)

    const data = await trendingResponse.json()

    const trendingVideosDetails = data.videos.map(item => ({
      channel: {
        name: item.channel.name,
        profileImageUrl: item.channel.profile_image_url,
      },
      id: item.id,
      publishedAt: item.published_at,
      thumbnailUrl: item.thumbnail_url,
      title: item.title,
      viewsCount: item.view_count,
    }))

    if (trendingResponse.ok === true) {
      this.setState({
        trendingVideos: trendingVideosDetails,
        apiStatus: apiConstants.success,
      })
    } else {
      this.setState({apiStatus: apiConstants.failure})
    }
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

  onRenderApi = () => {
    this.setState(this.getTrendingVideoDetails)
  }

  renderSuccessView = () => {
    const {trendingVideos} = this.state
    return (
      <NxtContext.Consumer>
        {value => {
          const {themeChange} = value

          const headerBgColor = themeChange ? '#231f20' : '#ffffff'

          const iconBg = themeChange ? '#000000' : '#e2e8f0'

          const headColor = themeChange ? '#ffffff' : '#000000'

          const conatinerBg = themeChange ? '#0f0f0f' : '#ffffff'

          return (
            <>
              <TrendingHeaderContainer bgColor={headerBgColor}>
                <TrendingIconContainer iconBgColor={iconBg}>
                  <SiTinder className="tinder-icon" />
                </TrendingIconContainer>
                <TrendingHeading color={headColor}>Trending</TrendingHeading>
              </TrendingHeaderContainer>

              <TrendingVideos>
                {trendingVideos.map(eachItem => (
                  <TrendingVideoItem
                    trendingVideos={eachItem}
                    key={eachItem.id}
                  />
                ))}
              </TrendingVideos>
            </>
          )
        }}
      </NxtContext.Consumer>
    )
  }

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

  onRenderTrendingView = () => {
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
    return (
      <NxtContext.Consumer>
        {value => {
          const {themeChange} = value
          const conatinerBg = themeChange ? '#0f0f0f ' : '#f9f9f9'

          return (
            <>
              <Header />
              <TrendingContainer>
                <Sidebar />
                <TrendingVideosContainer
                  data-testid="trending"
                  trendingContBgColor={conatinerBg}
                >
                  {this.onRenderTrendingView()}
                </TrendingVideosContainer>
              </TrendingContainer>
            </>
          )
        }}
      </NxtContext.Consumer>
    )
  }
}

export default Trending
