import styled from 'styled-components'

export const VideoListItem = styled.li`
  list-style-type: none;
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 576px) and (max-width: 768px) {
    display: flex;
    flex-direction: row;
    padding-left: 30px;
  }
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`

export const VideoThumnail = styled.img`
  width: 100%;
  height: 240px;
  @media screen and (min-width: 576px) and (max-width: 768px) {
    width: 50%;
  }
  @media screen and (min-width: 768px) {
    height: 220px;
    width: 40%;
  }
`
export const ProfileVideoDetailsContainer = styled.div`
  display: flex;
  padding-left: 15px;
`

export const ProfileImage = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 40px;
  margin-right: 15px;
  margin-top: 15px;
  @media screen and (min-width: 576px) and (max-width: 768px) {
    display: none;
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const VideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const VideoTitle = styled.h1`
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => props.headingColor};
  margin-bottom: 0px;
  width: 315px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 30px;
    margin-top: 0px;
    width: 300px;
  }
`

export const VideoViewsContainer = styled.div`
  display: flex;
  @media screen and (min-width: 576px) and (max-width: 768px) {
    flex-direction: column;
  }
  @media screen and (min-width: 768px) {
    flex-direction: column;
  }
`

export const VideoProfileName = styled.p`
  font-family: 'Roboto';
  font-size: 13px;
  color: ${props => props.listItemColor};
  margin-right: 10px;
  @media screen and (min-width: 576px) and (max-width: 768px) {
    font-size: 17px;
    margin-right: 0px;
  }
  @media screen and (min-width: 768px) {
    margin-right: 0px;
    font-size: 18px;
  }
`

export const VideoViewsListContainer = styled.ul`
  display: flex;
  padding-left: 0px;
  align-self: center;

  @media screen and (min-width: 576px) and (max-width: 768px) {
    padding-left: 0px;
    padding-right: 110px;
  }
  @media screen and (min-width: 768px) {
    padding-left: 0px;
    padding-right: 130px;
  }
`

export const VideoViewListItem = styled.li`
  font-family: 'Roboto';
  font-size: 13px;
  color: ${props => props.listItemColor};
  padding-right: 6px;
  margin-left: 20px;
  list-style-type: disc;
  @media screen and (min-width: 576px) and (max-width: 768px) {
    list-style-type: ${props => props.listType};
    font-size: 17px;
  }
  @media screen and (min-width: 768px) {
  }
`
