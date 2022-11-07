import styled from 'styled-components'

export const SidebarContainer = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${props => props.sideBgColor};
    width: 20%;
    height: 100vh;
  }
`

export const NavItemsListContainer = styled.ul`
  list-style-type: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  padding-left: 0px;
`

export const NavListItem = styled.li`
  width: 100%;
  color: ${props => props.iconColor};

  background-color: ${props => props.bgColor};
  font-weight: ${props => props.listFontweight};
  display: flex;
  cursor: pointer;
  outline: none;
  margin-bottom: 0px;
  margin-top: 0px;
`

export const NavItemText = styled.p`
  font-family: 'Roboto';
  font-size: 13px;
  color: ${props => props.navItemcolor};
  font-weight: ${props => props.weight};
`

export const ContactHeading = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: ${props => props.contactColor};
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
  margin-left: 22px;
`
