import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
`

export const NotFoundContainer = styled.div`
  width: 80%;
  height: 100vh;
  background-color: ${props => props.bgColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const NotFoundImage = styled.img`
  width: 90%;
  height: 340px;
  @media screen and (min-width: 768px) {
    width: 350px;
    height: 350px;
  }
`

export const NotFoundText = styled.h1`
  font-family: 'Roboto';
  font-size: 22px;
  font-weight: bold;
  color: ${notfound => notfound.textcolor};
  margin-bottom: 0px;
  margin-top: 40px;
`
export const NotFoundDescription = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: ${notfound => notfound.descColor};
  text-align: center;
`
