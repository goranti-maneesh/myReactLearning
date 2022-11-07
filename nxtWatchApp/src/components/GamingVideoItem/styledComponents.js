import styled from 'styled-components'

export const GamingVideoListItem = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  margin-left: 25px;
  margin-bottom: 50px;
  @media screen and (min-width: 576px) and (max-width: 768px) {
    margin-left: 20px;
  }
`

export const GamingThumbnailImage = styled.img`
  width: 210px;
  height: 250px;
  @media screen and (min-width: 576px) and (max-width: 768px) {
    height: 300px;
    width: 210px;
  }
  @media screen and (min-width: 768px) {
    height: 270px;
  }
`

export const GamingVideoName = styled.p`
  font-family: 'Roboto';
  font-size: 19px;
  font-weight: bold;
  color: ${gaming => gaming.listTitle};
  margin-bottom: 0px;
  margin-top: 20px;

  @media screen and (min-width: 768px) {
    font-size: 15px;
  }
`

export const GamingViewsText = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  color: ${gaming => gaming.viewsColor};
  margin-top: 4px;
  line-height: 27px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const GamingViewLargeText = styled.p`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    font-family: 'Roboto';
    font-size: 13px;
    color: ${gaming => gaming.viewsColor};
    margin-top: 4px;
    line-height: 27px;
  }
`
