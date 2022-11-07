import {Link} from 'react-router-dom'

import {formatDistanceToNow} from 'date-fns'
import {
  ThumbnailContainer,
  ThumbnailImage,
  ThumbnailDetailsContainer,
  ProfileImage,
  VideoTitleContainer,
  VideoTitleText,
  ProfileViewsTitleContainer,
  ProfileTitle,
  ViewsContainer,
  ViewListItem,
  ViewListItem1,
} from './styledComponents'

import NxtContext from '../../context/NxtContext'

import './index.css'

const VideoItem = props => {
  const {videoDetails} = props

  const {
    channel,
    publishedAt,
    id,
    thumbnailUrl,
    title,
    viewsCount,
  } = videoDetails
  const channelDetails = {
    profileImageUrl: channel.profile_image_url,
    name: channel.name,
  }

  const {name, profileImageUrl} = channelDetails

  return (
    <NxtContext.Consumer>
      {value => {
        const {themeChange} = value

        const titleColor = themeChange ? '#ffffff' : '#000000'

        const viewsColor = themeChange ? '#94a3b8' : '#475569'

        let postedAt = formatDistanceToNow(new Date(publishedAt))
        const postedAtList = postedAt.split(' ')

        if (postedAtList.length === 3) {
          postedAtList.shift()
          postedAt = postedAtList.join(' ')
        }

        return (
          <Link to={`/videos/${id}`} className="link-element">
            <ThumbnailContainer>
              <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
              <ThumbnailDetailsContainer>
                <ProfileImage src={profileImageUrl} alt="channel logo" />
                <VideoTitleContainer>
                  <VideoTitleText textColor={titleColor}>
                    {title}
                  </VideoTitleText>

                  <ProfileViewsTitleContainer viewColor={viewsColor}>
                    <ProfileTitle>{name}</ProfileTitle>
                    <ViewsContainer>
                      <ViewListItem>{viewsCount} views</ViewListItem>
                      <ViewListItem1>{postedAt} ago</ViewListItem1>
                    </ViewsContainer>
                  </ProfileViewsTitleContainer>
                </VideoTitleContainer>
              </ThumbnailDetailsContainer>
            </ThumbnailContainer>
          </Link>
        )
      }}
    </NxtContext.Consumer>
  )
}

export default VideoItem
