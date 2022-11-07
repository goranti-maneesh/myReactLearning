import {RiMenuAddFill} from 'react-icons/ri'

import Header from '../Header'
import Sidebar from '../Sidebar'
import SavedVideoItem from '../SavedVideoItem'
import NxtContext from '../../context/NxtContext'

import {
  SavedVideosContainer,
  SavedVideoHeadingContainer,
  SavedTitleHeading,
  IconContainer,
  VideosContainer,
  SavedVideosListContainer,
  NoSavedContainer,
  NoSavedImage,
  NoSavedHeading,
  NoSavedVideoText,
} from './styledComponents'

import './index.css'

const SavedVideos = () => (
  <NxtContext.Consumer>
    {value => {
      const {themeChange, savedVideosList} = value

      const headerBgColor = themeChange ? '#231f20' : '#ffffff'

      const headingColor = themeChange ? '#ffffff' : '#000000'

      const iconClassname = themeChange ? 'dark-saved-icon' : 'saved-icon'

      const iconBg = themeChange ? '#000000' : '#e2e8f0'

      const listBgColor = themeChange ? '#0f0f0f' : '#f9f9f9'

      const novideos = themeChange ? '#f8fafc' : '#1e293b'

      const noVideosText = themeChange ? '#f1f1f1' : '#475569'

      return (
        <>
          <Header />
          <SavedVideosContainer>
            <Sidebar />

            {savedVideosList.length === 0 ? (
              <NoSavedContainer
                data-testid="savedVideos"
                NoSaveBgColor={listBgColor}
              >
                <NoSavedImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                  alt="no saved videos"
                />
                <NoSavedHeading noVideosColor={novideos}>
                  No saved videos found
                </NoSavedHeading>
                <NoSavedVideoText textColor={noVideosText}>
                  You can save your videos while watching them
                </NoSavedVideoText>
              </NoSavedContainer>
            ) : (
              <SavedVideosListContainer
                data-testid="savedVideos"
                listItemBgColor={listBgColor}
              >
                <SavedVideoHeadingContainer titleContBgColor={headerBgColor}>
                  <IconContainer iconBgColor={iconBg}>
                    <RiMenuAddFill className={iconClassname} />
                  </IconContainer>
                  <SavedTitleHeading headingColor={headingColor}>
                    Saved Videos
                  </SavedTitleHeading>
                </SavedVideoHeadingContainer>

                <VideosContainer>
                  {savedVideosList.map(item => (
                    <SavedVideoItem video={item} key={item.id} />
                  ))}
                </VideosContainer>
              </SavedVideosListContainer>
            )}
          </SavedVideosContainer>
        </>
      )
    }}
  </NxtContext.Consumer>
)

export default SavedVideos
