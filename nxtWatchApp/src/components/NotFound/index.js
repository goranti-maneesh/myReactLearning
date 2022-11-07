import NxtContext from '../../context/NxtContext'
import Header from '../Header'
import Sidebar from '../Sidebar'

import {
  NotFoundContainer,
  NotFoundImage,
  NotFoundText,
  NotFoundDescription,
  Container,
} from './styledComponents'

const NotFound = () => (
  <NxtContext.Consumer>
    {value => {
      const {themeChange} = value

      const bgColor = themeChange ? '#181818' : '#ffffff'

      const textColor = themeChange ? '#f8fafc' : '#1e293b'

      const colorDesc = themeChange ? '#94a3b8' : '#64748b'

      const notfoundImage = themeChange
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

      return (
        <>
          <Header />
          <Container>
            <Sidebar />

            <NotFoundContainer bgColor={bgColor}>
              <NotFoundImage alt="not found" src={notfoundImage} />
              <NotFoundText textcolor={textColor}>Page Not Found</NotFoundText>
              <NotFoundDescription descColor={colorDesc}>
                we are sorry, the page you requested could not be found.
              </NotFoundDescription>
            </NotFoundContainer>
          </Container>
        </>
      )
    }}
  </NxtContext.Consumer>
)

export default NotFound
