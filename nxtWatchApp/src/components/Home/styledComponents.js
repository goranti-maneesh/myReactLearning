import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${props => props.bgColor};

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`
export const PlansContainer = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #f8fafc;

  @media screen and (min-width: 576px) and (max-width: 768px) {
    background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
    background-size: cover;
    justify-content: space-between;
    width: 100%;
    padding-left: 30px;
  }

  @media screen and (min-width: 768px) {
    background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
    background-size: cover;

    justify-content: space-between;
    margin-bottom: 20px;
    width: 100%;
    padding-left: 30px;
  }
`

export const PlansContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  margin-bottom: 50px;
  @media screen and (min-width: 768px) {
    margin-top: 30px;
    margin-bottom: 15px;
  }
`

export const YoutubeContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.bgColor};

  @media screen and (min-width: 768px) {
    width: 80%;
  }
`

export const VideoThumbnailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 30px;
`

export const PlanWebsiteLogo = styled.img`
  height: 45px;
  width: 160px;
  @media screen and (min-width: 576px) and (max-width: 768px) {
    height: 40px;
    width: 150px;
  }

  @media screen and (min-width: 768px) {
    height: 30px;
    width: 130px;
  }
`

export const PlanParagraph = styled.p`
  font-family: 'Roboto';
  font-size: 23px;
  color: #181818;
  line-height: 40px;

  width: 300px;

  @media screen and (min-width: 576px) and (max-width: 768px) {
    width: 350px;
  }
  @media screen and (min-width: 768px) {
    font-size: 18px;
    font-weight: 400;
    width: 350px;
  }
`

export const GetItNowButton = styled.button`
  background-color: transparent;
  border: 1px solid #181818;
  height: 50px;
  width: 160px;
  font-family: 'Roboto';
  font-size: 20px;
  color: #231f20;
  font-weight: bold;
  margin-top: 18px;
  cursor: pointer;
  outline: none;

  @media screen and (min-width: 576px) and (max-width: 768px) {
    margin-top: 10px;
  }

  @media screen and (min-width: 768px) {
    height: 40px;
    width: 120px;
    font-size: 14px;
    margin-top: 20px;
  }
`

export const InputContainer = styled.div`
  display: flex;
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;

  @media screen and (min-width: 576px) and (max-width: 768px) {
    padding-left: 0px;

    margin-top: 30px;
  }

  @media screen and (min-width: 768px) {
    padding-left: 0px;
    margin-top: 30px;
  }
`

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  align-self: flex-start;
  cursor: pointer;
  outline: none;

  @media screen and (min-width: 576px) and (max-width: 768px) {
    margin-right: 30px;
    margin-top: 20px;
  }

  @media screen and (min-width: 768px) {
  }
`

export const InputElement = styled.input`
  height: 45px;
  width: 600px;
  border: 1px solid ${props => props.borderColor};
  background-color: transparent;
  font-family: 'Roboto';
  font-size: 18px;
  padding-left: 20px;

  @media screen and (min-width: 576px) and (max-width: 768px) {
    width: 380px;
    height: 40px;
  }
  @media screen and (min-width: 768px) {
    width: 350px;
    height: 30px;
    font-size: 14px;
  }
`

export const SearchContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  outline: none;
  border: 1px solid ${props => props.searchBorder};
  background-color: ${props => props.searchBgColor};
  width: 160px;
  @media screen and (min-width: 576px) and (max-width: 768px) {
    width: 70px;
  }

  @media screen and (min-width: 768px) {
    width: 70px;
  }
`

export const VideosListsContainer = styled.ul`
  margin-top: 30px;
  padding-left: 0px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 576px) and (max-width: 768px) {
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    flex-grow: 1;
  }
`

export const SidebarContainer = styled.div`
  display: none;
  background-color: ${props => props.sideBgColor} @media screen and
    (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;

    padding-left: 25px;
    width: 24%;
  }
`

export const NavItemsListContainer = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  padding-left: 0px;
`

export const NavListItem = styled.li`
  display: flex;
`

export const NavItemText = styled.p`
  font-family: 'Roboto';
  font-size: 13px;
  color: #0f0f0f;
`

export const ContactHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 15px;
  color: #181818;
  width: 200px;
  line-height: 22px;
`

export const IconsContainer = styled.div`
  display: flex;
`

export const ContactIcon = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 13px;
`

export const BottomSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const NoResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 50px;
`

export const NoResultImage = styled.img`
  height: 220px;
  width: 250px;
  @media screen and (min-width: 768px) {
    width: 300px;
    height: 250px;
  }
`

export const NoResultHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  color: ${props => props.noViewColor};
  @media screen and (min-width: 768px) {
    font-size: 22px;
    margin-top: 14px;
  }
`

export const NoResultDescription = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  color: ${props => props.noViewTextColor};
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 18px;
    margin-top: 0px;
  }
`
export const RetryButton = styled.button`
  height: 45px;
  width: 110px;
  background-color: #4f46e5;
  border-width: 0px;
  margin-top: 16px;
  color: #ffffff;
  cursor: pointer;
  outline: none;
  @media screen and (min-width: 768px) {
    height: 35px;
    width: 100px;
    border-radius: 5px;
    margin-top: 10px;
  }
`
