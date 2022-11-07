import {Link} from 'react-router-dom'

import {formatDistanceToNow} from 'date-fns'

import NxtContext from '../../context/NxtContext'

import {
  TrendingVideoListItem,
  VideoThumbnailImage,
  VideoTitleContainer,
  VideoImageContainer,
  VideoTitleImage,
  VideoTitleHeading,
  VideoDescriptiveContainer,
  VideoTitleViewsContainer,
  VideoViewsContainer,
  VideoTitleText,
  VideoViewsText,
  VideoDot,
  VideoSmallText,
} from './styledComponents'

import './index.css'

const TrendingVideoItem = props => {
  const {trendingVideos} = props

  const {
    thumbnailUrl,
    publishedAt,
    viewsCount,
    id,
    channel,
    title,
  } = trendingVideos

  const {name, profileImageUrl} = channel

  return (
    <NxtContext.Consumer>
      {value => {
        const {themeChange} = value

        const titleHeading = themeChange ? '#ffffff' : '#181818'

        const colorList = themeChange ? '#94a3b8' : '#616e7c '

        let postedAt = formatDistanceToNow(new Date(publishedAt))
        const postedAtList = postedAt.split(' ')

        if (postedAtList.length === 3) {
          postedAtList.shift()
          postedAt = postedAtList.join(' ')
        }

        return (
          <Link to={`/videos/${id}`} className="link-element">
            <TrendingVideoListItem>
              <VideoImageContainer>
                <VideoThumbnailImage alt="video thumbnail" src={thumbnailUrl} />
              </VideoImageContainer>
              <VideoTitleContainer>
                <VideoTitleImage src={profileImageUrl} />
                <VideoDescriptiveContainer>
                  <VideoTitleHeading titleColor={titleHeading}>
                    {title}
                  </VideoTitleHeading>
                  <VideoTitleViewsContainer viewsTextColor={colorList}>
                    <VideoTitleText>{name} </VideoTitleText>
                    <VideoViewsContainer>
                      {' '}
                      <VideoViewsText>
                        {' '}
                        &#x2022;
                        {viewsCount} views{' '}
                      </VideoViewsText>
                      <VideoSmallText> {viewsCount} views </VideoSmallText>
                      <VideoDot>&#x2022; {postedAt} ago </VideoDot>
                    </VideoViewsContainer>
                  </VideoTitleViewsContainer>
                </VideoDescriptiveContainer>
              </VideoTitleContainer>
            </TrendingVideoListItem>
          </Link>
        )
      }}
    </NxtContext.Consumer>
  )
}

export default TrendingVideoItem
