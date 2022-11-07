import {Component} from 'react'
import {Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'
import {IoIosClose} from 'react-icons/io'

import {AiOutlineSearch} from 'react-icons/ai'

import VideoItem from '../VideoItem'
import Header from '../Header'
import Sidebar from '../Sidebar'

import NxtContext from '../../context/NxtContext'

import {
  PlansContainer,
  PlansContentContainer,
  PlanWebsiteLogo,
  PlanParagraph,
  GetItNowButton,
  CloseButton,
  InputContainer,
  InputElement,
  SearchContainer,
  VideosListsContainer,
  SidebarContainer,
  NavItemsListContainer,
  NavListItem,
  NavItemText,
  ContactHeading,
  IconsContainer,
  ContactIcon,
  BottomSectionContainer,
  Container,
  YoutubeContentContainer,
  VideoThumbnailsContainer,
  NoResultContainer,
  NoResultImage,
  NoResultHeading,
  NoResultDescription,
  RetryButton,
} from './styledComponents'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    videosList: [],
    onClose: false,
    searchInput: '',
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getVideosList()
  }

  getVideosList = async () => {
    const {searchInput} = this.state

    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')

    const videosApiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(videosApiUrl, options)

    const data = await response.json()

    const updatedVideosData = data.videos.map(video => ({
      channel: video.channel,
      id: video.id,
      publishedAt: video.published_at,
      thumbnailUrl: video.thumbnail_url,
      title: video.title,
      viewsCount: video.view_count,
    }))

    if (response.ok === true) {
      this.setState({
        videosList: updatedVideosData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onChangeInput = () => {
    this.setState(this.getVideosList)
  }

  onCloseButton = () => {
    this.setState({onClose: true})
  }

  onRetryApiCall = () => {
    this.setState(this.getVideosList)
  }

  renderFailureView = () => (
    <NxtContext.Consumer>
      {value => {
        const {themeChange} = value

        const failureImage = themeChange
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

        const noviewHeading = themeChange ? '#ffffff' : '#181818'

        const noviewText = themeChange ? ' #94a3b8' : '#475569'

        return (
          <NoResultContainer>
            <NoResultImage alt="failure view" src={failureImage} />
            <NoResultHeading noViewColor={noviewHeading}>
              Oops! Something Went Wrong
            </NoResultHeading>
            <NoResultDescription noViewTextColor={noviewText}>
              We are having some trouble
            </NoResultDescription>
            <RetryButton onClick={this.onRetryApiCall}>Retry</RetryButton>
          </NoResultContainer>
        )
      }}
    </NxtContext.Consumer>
  )

  renderNoResultsView = () => (
    <NxtContext.Consumer>
      {value => {
        const {themeChange} = value

        const noviewHeading = themeChange ? '#ffffff' : '#181818'

        const noviewText = themeChange ? ' #94a3b8' : '#475569'

        return (
          <NoResultContainer>
            <NoResultImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <NoResultHeading noViewColor={noviewHeading}>
              No Search results found
            </NoResultHeading>
            <NoResultDescription noViewTextColor={noviewText}>
              Try different key words or remove search filter
            </NoResultDescription>
            <RetryButton onClick={this.onRetryApiCall}>Retry</RetryButton>
          </NoResultContainer>
        )
      }}
    </NxtContext.Consumer>
  )

  renderLoaderView = () => (
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

  renderSuccessView = () => {
    const {videosList} = this.state
    return (
      <VideosListsContainer>
        {videosList.length === 0
          ? this.renderNoResultsView()
          : videosList.map(video => (
              <VideoItem videoDetails={video} key={video.id} />
            ))}
      </VideosListsContainer>
    )
  }

  renderDisplayView = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoaderView()
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    const {videosList, onClose} = this.state

    return (
      <NxtContext.Consumer>
        {value => {
          const {themeChange} = value

          const containerBgColor = themeChange ? '#181818' : '#f9f9f9'

          const searchContainer = themeChange ? '#383838' : '#f4f4f4'

          const inputBorder = themeChange ? '#909090' : '#94a3b8'

          const searchIcon = themeChange
            ? 'search-icon dark-search-icon'
            : 'search-icon'

          return (
            <>
              <Header />
              <Container>
                <Sidebar />

                <YoutubeContentContainer
                  data-testid="home"
                  bgColor={containerBgColor}
                >
                  {onClose ? null : (
                    <PlansContainer data-testid="banner">
                      <PlansContentContainer>
                        <PlanWebsiteLogo
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                          alt="nxt watch logo"
                        />
                        <PlanParagraph>
                          Buy Nxt Watch Premium prepaid plans with UPI
                        </PlanParagraph>
                        <GetItNowButton>GET IT NOW</GetItNowButton>
                      </PlansContentContainer>

                      <CloseButton
                        data-testid="close"
                        onClick={this.onCloseButton}
                      >
                        <IoIosClose className="close-icon" />
                      </CloseButton>
                    </PlansContainer>
                  )}
                  <VideoThumbnailsContainer>
                    <InputContainer>
                      <InputElement
                        borderColor={inputBorder}
                        placeholder="Search"
                        type="search"
                        onChange={this.onChangeSearchInput}
                      />
                      <SearchContainer
                        onClick={this.onChangeInput}
                        searchBorder={inputBorder}
                        searchBgColor={searchContainer}
                        data-testid="searchButton"
                      >
                        <AiOutlineSearch className={searchIcon} />
                      </SearchContainer>
                    </InputContainer>
                    {this.renderDisplayView()}
                  </VideoThumbnailsContainer>
                </YoutubeContentContainer>
              </Container>
            </>
          )
        }}
      </NxtContext.Consumer>
    )
  }
}

export default Home
