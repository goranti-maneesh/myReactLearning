import styled from 'styled-components'

export const SavedVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`

export const SavedVideosListContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.listItemBgColor};
  width: 100%;
`

export const SavedVideoHeadingContainer = styled.div`
  background-color: ${kishore => kishore.titleContBgColor};
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  padding-left: 30px;
`

export const IconContainer = styled.div`
  border-radius: 40px;
  height: 60px;
  width: 60px;
  background-color: ${props => props.iconBgColor};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`

export const SavedTitleHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 23px;
  color: ${props => props.headingColor};
`

export const VideosContainer = styled.ul`
  list-style-type: none;
  width: 100%;
  padding-left: 0px;
  margin-top: 25px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    padding-left: 40px;
    padding-top: 40px;
    height: 1100px;
  }
`

export const NoSavedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding-top: 100px;
  background-color: ${props => props.NoSaveBgColor};
`

export const NoSavedImage = styled.img`
  width: 90%;
  height: 300px;
  @media screen and (min-width: 768px) {
    width: 330px;
    height: 280px;
  }
`

export const NoSavedHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 30px;
  color: ${props => props.noVideosColor};
  margin-top: 50px;
  @media screen and (min-width: 768px) {
    font-size: 22px;
  }
`

export const NoSavedVideoText = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  color: ${props => props.textColor};
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`
