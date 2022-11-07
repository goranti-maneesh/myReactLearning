import styled from 'styled-components'

export const NavContainer = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: ${props => props.navBgColor};
  @media screen and (min-width: 768px) {
    padding-left: 50px;
    padding-right: 50px;
  }
`

export const WebsiteLogoImage = styled.img`
  height: 32px;
  width: 150px;
  @media screen and (min-width: 768px) {
    height: 28px;
    width: 140px;
  }
`

export const NavItemsContainer = styled.div`
  display: flex;
`

export const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
`

export const PersonImage = styled.img`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    height: 30px;
    width: 30px;
    margin-right: 10px;
  }
`

export const LogoutButton = styled.button`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    background-color: transparent;
    border: 1px solid ${props => props.logoutBorderColor};
    color: ${props => props.logoutColor};
    font-family: 'Roboto';
    font-size: 15px;

    height: 30px;
    width: 80px;
    cursor: pointer;
    outline: none;
  }
`

export const PopupLogoutContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const PopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 220px;
  width: 400px;
  background-color: ${props => props.popUpBgColor};
  border-radius: 8px;
  padding: 20px;
  @media screen and (min-width: 768px) {
    height: 170px;
    width: 350px;
  }
`

export const PopupText = styled.p`
  font-family: 'Roboto';
  font-size: 22px;
  margin-top: 30px;
  margin-bottom: 30px;
  text-align: center;
  color: ${props => props.popupTextcolor};
  @media screen and (min-width: 768px) {
    margin-bottom: 14px;
    font-size: 17px;
  }
`
export const PopupButtonContainer = styled.div`
  display: flex;
`
export const PopupButton = styled.button`
  background-color: ${props => props.popupButtonBgColor};
  border: ${props => props.btnColor};
  border-width: ${props => props.borderWidth};
  border-radius: 6px;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: bold;
  color: ${props => props.popupButtonColor};
  height: 50px;
  width: 120px;
  margin: 20px;
  cursor: pointer;
  outline: none;
  @media screen and (min-width: 768px) {
    height: 40px;
    width: 90px;
    font-size: 15px;
    font-weight: 300;
    border-radius: 4px;
  }
`

export const PopupButton1 = styled(PopupButton)``
