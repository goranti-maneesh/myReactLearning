import styled from 'styled-components'

export const VideoItemDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`
export const VideoItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.bgColor};
  padding-top: 20px;
  width: 100%;
  @media screen and (min-width: 768px) {
    padding-left: 30px;
    padding-top: 30px;
    width: 80%;
  }
`

export const ReactPlayerContainer = styled.div`
  height: 330px;
  width: 100%;
  @media screen and (min-width: 768px) {
    height: 450px;
    padding-right: 20px;
  }
`

export const VideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  padding-top: 15px;
  padding-right: 20px;
  @media screen and (min-width: 768px) {
    padding-left: 0px;
  }
`

export const VideoDescription = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  color: ${props => props.descriptionColor};
  line-height: 35px;
  font-weight: 500;
  @media screen and (min-width: 768px) {
    font-size: 15px;
    line-height: 30px;
    font-weight: 500;
  }
`

export const VideoResponsesContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

export const VideoViewsDateContainer = styled.ul`
  padding-left: 0px;
  display: flex;
`

export const VideoListItem1 = styled.p`
  padding-right: 20px;
  margin-right: 20px;
  font-size: 15px;
  color: ${props => props.listColor};
  list-style-type: ${props => props.listType};
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`

export const ViewerResponseContainer = styled.div`
  display: flex;
  @media screen and (min-width: 768px) {
    padding-right: 20px;
  }
`

export const ViewerLikedContainer = styled.div`
  display: flex;
  margin-right: 25px;
  @media screen and (min-width: 768px) {
    padding-right: 3px;
  }
`

export const ViwerLikeButton = styled.button`
  border: none;
  background-color: transparent;
  color: ${props => props.iconColor};
  padding-right: 0px;
  cursor: pointer;
  outline: none;
`

export const ViewerLikeText = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  color: ${props => props.likeTextColor};
  @media screen and (min-width: 768px) {
    font-size: 13px;
    align-self: center;
  }
`

export const Hrline = styled.hr`
  width: 100%;
  color: ${props => props.lineColor};
`

export const VideoDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const VideoProfileContainer = styled.div`
  display: flex;
  margin-top: 20px;
`

export const ProfileImage = styled.img`
  height: 55px;
  width: 55px;
  margin-top: 20px;
  margin-right: 10px;
  @media screen and (min-width: 768px) {
    height: 45px;
    width: 45px;
  }
`

export const TitleSubscribersContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const TitleText = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => props.titleTextColor};
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`

export const SubscribersText = styled(TitleText)`
  font-size: 15px;
  margin-top: 0px;
  @media screen and (min-width: 768px) {
    font-size: 13px;
  }
`

export const DescriptionText = styled(TitleText)`
  font-size: 18px;
  line-height: 30px;
  @media screen and (min-width: 768px) {
    font-size: 14px;
    padding-left: 55px;
  }
`
export const FailureContainer = styled.div`
  height: 100vh;
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
  background-color: ${failure => failure.bgColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const FailureImage = styled.img`
  height: 240px;
  width: 240px;
`

export const FailureHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  color: ${props => props.failureHeadColor};
`
export const FailureText = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => props.textColor};
  text-align: center;
`

export const RetryButton = styled.button`
  background-color: #4f46e5;
  height: 45px;
  width: 110px;
  border-width: 0px;
  font-family: 'Roboto';
  font-size: 13px;
  color: #ffffff;
  font-weight: bold;
  margin-top: 20px;
  cursor: pointer;
  outline: none;
`
export const CommentContainer = styled.div`
  width: 80%;
  margin-top: 20px;
`

export const CommentInput = styled.textarea`
  border: none;
  border-bottom: 1px solid #ff0b37;
  background-color: transparent;
  margin-bottom: 20px;
  padding: 10px;

  width: 100%;
`
export const CommentButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const CancelButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  outline: none;
`
export const CommentButton = styled.button`
  border-width: 0px;
  background-color: #00306e;
  color: #ffffff;
  font-family: 'Roboto';
  height: 27px;
  width: 80px;
  border-radius: 14px;
  margin-left: 14px;
  cursor: pointer;
  outline: none;
`

export const PopupContainer = styled.div`
  background-color: ${props => props.commentPopupbgColor};
  height: 200px;
  width: 400px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const LabelText = styled.label`
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => props.labelColor};
  align-self: flex-start;
  margin-left: 60px;
`

export const NameInput = styled.input`
  height: 30px;
  width: 70%;
  margin-top: 13px;
`

export const ProceedButton = styled.button`
  background-color: #3b82f6;
  border-width: 0px;
  height: 30px;
  width: 90px;
  border-radius: 6px;
  color: #ffffff;
  margin-top: 20px;
  align-self: flex-end;
  margin-right: 60px;
  cursor: pointer;
  outline: none;
`

export const CommentsLists = styled.ul`
  padding-left: 0px;
  list-style-type: none;
`

export const CommentItem = styled.li`
  margin-bottom: 20px;
  display: flex;
`

export const ProfileAcronymContainer = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 40px;
  background-color: ${props => props.acronymColor};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  align-self: center;
`

export const ProfileAcronym = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  color: #ffffff;
`
export const CommentContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Username = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: bold;
  color: ${props => props.usernameColor};
  margin-bottom: 0px;
`

export const Comment = styled.p`
  font-family: 'Roboto';
  font-size: 13px;
  color: ${props => props.commentColor};
`
