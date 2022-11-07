import {Link} from 'react-router-dom'

import NxtContext from '../../context/NxtContext'

import {
  GamingVideoListItem,
  GamingThumbnailImage,
  GamingVideoName,
  GamingViewsText,
  GamingViewLargeText,
} from './styledComponents'

const GamingVideoItem = props => {
  const {video} = props

  const {id, thumbnailUrl, title, viewsCount} = video

  return (
    <NxtContext.Consumer>
      {value => {
        const {themeChange} = value

        const titleColor = themeChange ? '#f1f1f1' : '#212121'

        const viewsColor = themeChange ? '#94a3b8' : '#616e7c '

        return (
          <Link to={`/videos/${id}`} className="link-element">
            <GamingVideoListItem>
              <GamingThumbnailImage alt="video thumbnail" src={thumbnailUrl} />
              <GamingVideoName listTitle={titleColor}>{title}</GamingVideoName>
              <GamingViewsText viewsColor={viewsColor}>
                {viewsCount} Watching <br /> Worldwide
              </GamingViewsText>

              <GamingViewLargeText viewsColor={viewsColor}>
                {viewsCount} Watching Worldwide
              </GamingViewLargeText>
            </GamingVideoListItem>
          </Link>
        )
      }}
    </NxtContext.Consumer>
  )
}

export default GamingVideoItem
