import {formatDistanceToNow} from 'date-fns'
import {Link} from 'react-router-dom'

import NxtContext from '../../context/NxtContext'

import {
  VideoListItem,
  VideoThumnail,
  ProfileVideoDetailsContainer,
  ProfileImage,
  VideoDetailsContainer,
  VideoTitle,
  VideoViewsContainer,
  VideoProfileName,
  VideoViewsListContainer,
  VideoViewListItem,
} from './styledComponents'
import './index.css'

const SavedVideoItem = props => {
  const {video} = props

  const {thumbnailUrl, id, channel, viewsCount, publishedAt, title} = video

  const {profileImageUrl, name} = channel

  let postedAt = formatDistanceToNow(new Date(publishedAt))
  const postedAtList = postedAt.split(' ')

  if (postedAtList.length === 3) {
    postedAtList.shift()
    postedAt = postedAtList.join(' ')
  }

  return (
    <NxtContext.Consumer>
      {value => {
        const {themeChange} = value

        const colorHeading = themeChange ? '#ffffff' : '#231f20'

        const colorList = themeChange ? '#94a3b8' : '#616e7c '

        return (
          <Link to={`/videos/${id}`} className="link-element">
            <VideoListItem>
              <VideoThumnail src={thumbnailUrl} />
              <ProfileVideoDetailsContainer>
                <ProfileImage src={profileImageUrl} />
                <VideoDetailsContainer>
                  <VideoTitle headingColor={colorHeading}>{title}</VideoTitle>
                  <VideoViewsContainer>
                    <VideoProfileName listItemColor={colorList}>
                      {name}
                    </VideoProfileName>
                    <VideoViewsListContainer>
                      <VideoViewListItem
                        listItemColor={colorList}
                        listType="none"
                      >
                        {viewsCount} views
                      </VideoViewListItem>
                      <VideoViewListItem
                        listItemColor={colorList}
                        listType="disc"
                      >
                        {postedAt} ago
                      </VideoViewListItem>
                    </VideoViewsListContainer>
                  </VideoViewsContainer>
                </VideoDetailsContainer>
              </ProfileVideoDetailsContainer>
            </VideoListItem>
          </Link>
        )
      }}
    </NxtContext.Consumer>
  )
}

export default SavedVideoItem
