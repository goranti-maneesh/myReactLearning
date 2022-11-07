import styled from 'styled-components'

export const GamingBgContainer = styled.div`
  display: flex;
  width: 100%;
`

export const GamingContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.gamingBgColoR};
  @media screen and (min-width: 768px) {
    width: 80%;
  }
`

export const GamingHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => props.headerBgColor};
  height: 120px;
  width: 100%;
  padding-left: 40px;
`

export const GamingIconContainer = styled.div`
  height: 70px;
  width: 70px;
  border-radius: 40px;
  background-color: ${gaming => gaming.bgColor};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`

export const GamingHeaderHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 30px;
  color: ${heading => heading.headColor};
  font-weight: 450;
`

export const GamingVideosContainer = styled.ul`
  padding-left: 20px;
  padding-top: 40px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  @media screen and (min-width: 576px) and (max-width: 768px) {
    padding-left: 0px;
  }
  @media screen and (min-width: 768px) {
    padding-left: 15px;
  }
`
export const FailureContainer = styled.div`
  background-color: ${props => props.failureBgColor};
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  padding-left: 0px;
  @media screen and (min-width: 68px) {
    padding-top: 140px;
  }
`

export const FailureImage = styled.img`
  height: 250px;
  width: 250px;
  @media screen and (min-width: 768px) {
    width: 300px;
  }
`

export const FailureHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  margin-top: 30px;
  color: ${props => props.failureHeading};
  @media screen and (min-width: 768px) {
    font-size: 22px;
    font-weight: 400;
  }
`

export const FailureText = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  text-align: center;
  line-height: 30px;
  font-weight: 400;
  color: ${props => props.failureText};
  margin-top: 0px;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`

export const FailureButton = styled.button`
  height: 50px;
  width: 120px;
  background-color: #4f46e5;
  border-radius: 6px;
  border-width: 0px;
  color: #ffffff;
  font-family: 20px;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  @media screen and (min-width: 768px) {
    width: 90px;
    height: 40px;
  }
`
