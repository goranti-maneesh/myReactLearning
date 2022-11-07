import styled from 'styled-components'

export const ThumbnailContainer = styled.li`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  @media screen and (min-width: 576px) and (max-width: 768px) {
    width: 50%;
    margin-bottom: 60px;
  }

  @media screen and (min-width: 768px) {
    width: 270px;
    height: 270px;
    margin-bottom: 80px;

    margin-right: 20px;
  }
`

export const ThumbnailImage = styled.img`
  width: 100%;
  height: 300px;

  @media screen and (min-width: 576px) and (max-width: 768px) {
    height: 170px;
    width: 290px;
    margin-right: 15px;
  }

  @media screen and (min-width: 768px) {
    height: 150px;
  }
`
export const ThumbnailDetailsContainer = styled.div`
  display: flex;
`

export const ProfileImage = styled.img`
  height: 45px;
  width: 45px;
  border-radius: 40px;
  align-self: flex-start;
  margin: 20px;
  @media screen and (min-width: 768px) {
    height: 30px;
    margin: 0px;
    margin-right: 10px;

    width: 30px;
    align-self: flex-start;
    margin-top: 20px;
  }
`

export const VideoTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const VideoTitleText = styled.p`
  font-size: 20px;
  font-family: 'Roboto';
  color: ${props => props.textColor};
  line-height: 30px;

  margin-bottom: 0px;
  @media screen and (min-width: 576px) and (max-width: 768px) {
    font-size: 17px;
  }
  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 0px;
  }
`

export const ProfileViewsTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (min-width: 576px) and (max-width: 768px) {
    flex-direction: column;
  }
  @media screen and (min-width: 768px) {
    flex-direction: column;
    margin-top: 0px;
    color: ${props => props.viewColor};
  }
`

export const ProfileTitle = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: #616e7c;
  margin-right: px;
  @media screen and (min-width: 576px) and (max-width: 768px) {
  }
  @media screen and (min-width: 768px) {
    font-size: 14px;
    margin-top: 6px;
    margin-bottom: 0px;
  }
`

export const ViewsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;

  @media screen and (min-width: 576px) and (max-width: 768px) {
    padding-left: 0px;
    margin-right: 55px;
  }
  @media screen and (min-width: 768px) {
    padding-left: 0px;
    margin-right: 50px;
  }
`

export const ViewListItem = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: #616e7c;
  padding-right: 14px;
  padding-left: 0px;
  margin-right: 14px;

  list-style-type: disc;

  @media screen and (min-width: 576px) and (max-width: 768px) {
    list-style-type: none;
    padding-left: 0px;
  }
  @media screen and (min-width: 768px) {
    list-style-type: none;
    font-size: 14px;

    padding-left: 0px;
    margin-top: 6px;
  }
`

export const ViewListItem1 = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: #616e7c;

  list-style-type: disc;
  @media screen and (min-width: 768px) {
    font-size: 14px;

    margin-top: 6px;
  }
`
