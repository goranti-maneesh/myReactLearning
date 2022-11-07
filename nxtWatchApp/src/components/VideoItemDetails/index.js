import {Component} from 'react'
import Popup from 'reactjs-popup'
import {v4} from 'uuid'
import {formatDistanceToNow} from 'date-fns'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'
import Loader from 'react-loader-spinner'

import {BiLike, BiDislike, BiListPlus} from 'react-icons/bi'

import Header from '../Header'

import Sidebar from '../Sidebar'
import NxtContext from '../../context/NxtContext'

import {
  VideoItemDetailsContainer,
  VideoItemContainer,
  ReactPlayerContainer,
  VideoDetailsContainer,
  VideoDescription,
  VideoViewsDateContainer,
  VideoListItem1,
  ViewerResponseContainer,
  ViewerLikedContainer,
  ViwerLikeButton,
  ViewerLikeText,
  VideoResponsesContainer,
  Hrline,
  VideoProfileContainer,
  ProfileImage,
  TitleSubscribersContainer,
  TitleText,
  SubscribersText,
  DescriptionText,
  VideoDescriptionContainer,
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureText,
  CommentInput,
  RetryButton,
  CommentContainer,
  CommentButtonsContainer,
  CancelButton,
  CommentButton,
  PopupContainer,
  NameInput,
  LabelText,
  ProceedButton,
  CommentsLists,
  CommentItem,
  ProfileAcronymContainer,
  ProfileAcronym,
  CommentContentContainer,
  Username,
  Comment,
} from './styledComponents'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'INPROGRESS',
}

const colors = [
  '#ff0b37',
  '#ff0000',
  '#4f46e5',
  '#00306e',
  '#3b82f6',
  '#616e7c',
]

class VideoItemDetails extends Component {
  state = {
    videoDetails: {},
    channelObj: {},
    likeStatus: false,
    dislikeStatus: false,
    commentControls: false,
    commentText: false,
    commentsList: [],
    userName: '',
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getVideoItemDetails()
  }

  getVideoItemDetails = async props => {
    const {match} = this.props

    const {params} = match

    const {id} = params

    const jwtToken = Cookies.get('jwt_token')

    this.setState({apiStatus: apiStatusConstants.inProgress})

    const apiUrl = `https://apis.ccbp.in/videos/${id}`

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(apiUrl, options)

    const data = await response.json()

    const item = data.video_details

    const updatedData = {
      id: item.id,
      channel: {
        name: item.channel.name,
        profileImageUrl: item.channel.profile_image_url,
        subscriberCount: item.channel.subscriber_count,
      },
      description: item.description,
      publishedAt: item.published_at,
      thumbnailUrl: item.thumbnail_url,
      title: item.title,
      videoUrl: item.video_url,
      viewsCount: item.view_count,
    }

    if (response.ok === true) {
      this.setState({
        videoDetails: updatedData,
        channelObj: updatedData.channel,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onClickLike = () => {
    this.setState(prevState => ({
      likeStatus: !prevState.likeStatus,
      dislikeStatus: false,
    }))
  }

  onClickDislike = () => {
    this.setState(prevState => ({
      dislikeStatus: !prevState.dislikeStatus,
      likeStatus: false,
    }))
  }

  renderLoaderView = () => (
    <div className="loader-container loader" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  retryApiCall = () => {
    this.setState(this.getVideoItemDetails)
  }

  onTryComment = () => {
    this.setState({commentControls: true})
  }

  onCancelCommenting = () => {
    this.setState({commentControls: false})
  }

  onChangeComment = event => {
    this.setState({commentText: event.target.value})
  }

  onChangeUsername = event => {
    this.setState({userName: event.target.value})
  }

  addComment = () => {
    const {commentText, userName} = this.state

    const acronym = userName[0].toUpperCase()

    const color = colors[Math.floor(Math.random() * colors.length)]

    const newComment = {
      id: v4(),
      userName,
      commentText,
      acronym,
      color,
    }

    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
    }))
  }

  renderSuccessView = () => {
    const {
      videoDetails,
      channelObj,
      likeStatus,
      dislikeStatus,
      commentControls,
      commentsList,
    } = this.state

    const {
      description,
      id,
      publishedAt,
      videoUrl,
      viewsCount,
      title,
      videoSaved,
    } = videoDetails

    const {profileImageUrl, name, subscriberCount} = channelObj

    return (
      <NxtContext.Consumer>
        {value => {
          const {
            themeChange,
            addingVideos,
            isVideoSaved,
            savedVideosList,
          } = value

          const containerBgColor = themeChange ? '#0f0f0f' : '#f9f9f9 '

          const colorDesc = themeChange ? '#ffffff' : '#231f20'

          const colorList = themeChange ? '#64748b' : '#616e7c '

          const likeColor = themeChange ? '#64748b' : '#475569'

          const colorIcon = themeChange ? '#94a3b8' : '#475569'

          const colorLine = themeChange ? '#94a3b8' : '#475569'

          const titleColor = themeChange ? '#f1f1f1' : '#181818'

          const descriptionColor = themeChange ? '#f1f1f1' : '#475569'

          const labeltext = themeChange ? '#383838' : '#cccccc'

          const commentBg = themeChange ? '#e2e8f0' : ' #181818'

          const nameColor = themeChange ? '#e2e8f0' : ' #181818'

          const onSaveVideos = () => {
            addingVideos({...videoDetails})
          }

          return (
            <>
              <VideoItemContainer
                data-testid="videoItemDetails"
                bgColor={containerBgColor}
              >
                <ReactPlayerContainer>
                  <ReactPlayer
                    controls
                    url={videoUrl}
                    width="100%"
                    height="100%"
                  />
                </ReactPlayerContainer>
                <VideoDetailsContainer>
                  <VideoDescription descriptionColor={colorDesc}>
                    {title}
                  </VideoDescription>

                  <VideoResponsesContainer>
                    <VideoViewsDateContainer>
                      <VideoListItem1 listColor={colorList} listType="none">
                        {viewsCount} views
                      </VideoListItem1>
                      <VideoListItem1 listColor={colorList} listType="disc">
                        {publishedAt}
                      </VideoListItem1>
                    </VideoViewsDateContainer>

                    <ViewerResponseContainer>
                      <ViewerLikedContainer>
                        <ViwerLikeButton
                          onClick={this.onClickLike}
                          iconColor={likeStatus ? '#2563eb' : colorIcon}
                        >
                          <BiLike className="like-icons" />
                        </ViwerLikeButton>
                        <ViewerLikeText
                          likeTextColor={likeStatus ? '#2563eb' : likeColor}
                        >
                          Like
                        </ViewerLikeText>
                      </ViewerLikedContainer>

                      <ViewerLikedContainer>
                        <ViwerLikeButton
                          onClick={this.onClickDislike}
                          iconColor={dislikeStatus ? '#3b82f6' : colorIcon}
                        >
                          <BiDislike className="like-icons" />
                        </ViwerLikeButton>
                        <ViewerLikeText
                          likeTextColor={dislikeStatus ? '#3b82f6' : likeColor}
                        >
                          Dislike
                        </ViewerLikeText>
                      </ViewerLikedContainer>

                      <ViewerLikedContainer>
                        <ViwerLikeButton
                          onClick={onSaveVideos}
                          iconColor={isVideoSaved ? '#2563eb' : colorIcon}
                        >
                          <BiListPlus className="like-icons" />
                        </ViwerLikeButton>
                        <ViewerLikeText
                          likeTextColor={isVideoSaved ? '#2563eb' : likeColor}
                        >
                          {isVideoSaved ? 'Saved' : 'Save'}
                        </ViewerLikeText>
                      </ViewerLikedContainer>
                    </ViewerResponseContainer>
                  </VideoResponsesContainer>
                  <Hrline lineColor={colorLine} />
                  <VideoProfileContainer>
                    <ProfileImage alt="channel logo" src={profileImageUrl} />
                    <TitleSubscribersContainer>
                      <TitleText titleTextColor={titleColor}>{name}</TitleText>
                      <SubscribersText titleTextColor={likeColor}>
                        {subscriberCount} subscribers
                      </SubscribersText>
                    </TitleSubscribersContainer>
                  </VideoProfileContainer>
                  <DescriptionText titleTextColor={descriptionColor}>
                    {description}
                  </DescriptionText>

                  <CommentContainer>
                    <CommentInput
                      onClick={this.onTryComment}
                      onChange={this.onChangeComment}
                      placeholder="Add a comment..."
                      type="text"
                    />
                    {commentControls ? (
                      <CommentButtonsContainer>
                        <CancelButton onClick={this.onCancelCommenting}>
                          Cancel
                        </CancelButton>

                        <Popup
                          trigger={<CommentButton>Comment</CommentButton>}
                          modal
                          position="center center"
                        >
                          {addComment => (
                            <PopupContainer commentPopupbgColor={commentBg}>
                              <LabelText
                                labelColor={labeltext}
                                htmlFor="username"
                              >
                                {' '}
                                Enter Your Name
                              </LabelText>
                              <NameInput
                                onChange={this.onChangeUsername}
                                id="username"
                                type="text"
                              />
                              <ProceedButton onClick={this.addComment}>
                                Proceed
                              </ProceedButton>
                            </PopupContainer>
                          )}
                        </Popup>
                      </CommentButtonsContainer>
                    ) : (
                      ''
                    )}
                  </CommentContainer>

                  <CommentsLists>
                    {commentsList.map(comment => (
                      <CommentItem>
                        <ProfileAcronymContainer acronymColor={comment.color}>
                          <ProfileAcronym>{comment.acronym}</ProfileAcronym>
                        </ProfileAcronymContainer>
                        <CommentContentContainer>
                          <Username usernameColor={nameColor}>
                            {comment.userName}
                          </Username>
                          <Comment commentColor={nameColor}>
                            {comment.commentText}
                          </Comment>
                        </CommentContentContainer>
                      </CommentItem>
                    ))}
                  </CommentsLists>
                </VideoDetailsContainer>
              </VideoItemContainer>
            </>
          )
        }}
      </NxtContext.Consumer>
    )
  }

  renderFailureView = () => (
    <NxtContext.Consumer>
      {value => {
        const {themeChange} = value

        const failureHeading = themeChange ? '#f8fafc' : '#1e293b'

        const containerBgColor = themeChange ? '#0f0f0f' : '#ffffff'

        const noviewText = themeChange ? '#64748b' : '#94a3b8'
        const imageSrc = themeChange
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

        return (
          <FailureContainer bgColor={containerBgColor}>
            <FailureImage alt="failure view" src={imageSrc} />
            <FailureHeading failureHeadColor={failureHeading}>
              Oops! Something Went Wrong
            </FailureHeading>
            <FailureText textColor={noviewText}>
              We are having some trouble to complete your request. Please try
              again
            </FailureText>
            <RetryButton onClick={this.retryApiCall}>Retry</RetryButton>
          </FailureContainer>
        )
      }}
    </NxtContext.Consumer>
  )

  renderVideoItem = () => {
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
    return (
      <>
        <Header />
        <VideoItemDetailsContainer>
          <Sidebar />
          {this.renderVideoItem()}
        </VideoItemDetailsContainer>
      </>
    )
  }
}

export default VideoItemDetails
