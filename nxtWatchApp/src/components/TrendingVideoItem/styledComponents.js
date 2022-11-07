import styled from 'styled-components'

export const TrendingVideoListItem = styled.li`
  list-style-type: none;
  margin-bottom: 30px;
  width: 100%;
  background-size: cover;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 576px) and (max-width: 768px) {
    flex-direction: row;
  }
  @media screen and (min-width: 768px) {
    flex-direction: row;
    margin-bottom: 60px;
  }
`
export const VideoImageContainer = styled.div`
  width: 100%;

  @media screen and (min-width: 576px) and (max-width: 768px) {
    width: 50%;
  }

  @media screen and (min-width: 768px) {
    width: 40%;
  }
`

export const VideoThumbnailImage = styled.img`
  width: 100%;
  height: 230px;
  @media screen and (min-width: 576px) and (max-width: 768px) {
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    width: 350px;
    height: 180px;
  }
`

export const VideoTitleContainer = styled.div`
  display: flex;
  padding-left: 20px;
  @media screen and (min-width: 576px) and (max-width: 768px) {
    width: 50%;
  }
  @media screen and (min-width: 768px) {
    align-self: flex-start;
  }
`

export const VideoTitleImage = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 40px;
  margin-right: 10px;
  align-self: flex-start;
  margin-top: 15px;
  @media screen and (min-width: 576px) {
    display: none;
  }
`

export const VideoDescriptiveContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const VideoTitleHeading = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  color: ${title => title.titleColor};
  font-weight: 450;
  line-height: 30px;
  margin-bottom: 0px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    font-weight: 400;
    margin-top: 0px;
  }
`

export const VideoTitleViewsContainer = styled.div`
  font-family: 'Roboto';
  font-size: 16px;
  color: ${props => props.viewsTextColor};
  margin-top: 0px;
  display: flex;
  @media screen and (min-width: 576px) and (max-width: 768px) {
    flex-direction: column;
    font-size: 20px;
    margin-top: 0px;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    flex-direction: column;
  }
`

export const VideoTitleText = styled.p`
  margin-right: 10px;
  @media screen and (min-width: 576px) {
    margin-bottom: 0px;
  }
`

export const VideoViewsContainer = styled.div`
  display: flex;
  @media screen and (min-width: 576px) and (max-width: 768px) {
    margin-top: 0px;
    font-size: 18px;
  }

  @media screen and (min-width: 768px) {
    font-size: 15px;
    margin-top: 0px;
  }
`

export const VideoViewsText = styled.p`
  margin-right: 15px;
  @media screen and (min-width: 576px) {
    display: none;
  }
`

export const VideoSmallText = styled.p`
  display: none;
  @media screen and (min-width: 576px) {
    margin-right: 15px;
    display: block;
  }
`

export const VideoDot = styled.p``
