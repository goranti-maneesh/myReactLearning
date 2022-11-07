// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const imgHome = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
      const classHome = isDarkTheme ? 'head' : 'head1'
      const divHome = isDarkTheme ? 'homeDiv' : 'homeDiv1'
      console.log(isDarkTheme)
      return (
        <>
          <Navbar />
          <div className={`${divHome}`}>
            <img src={imgHome} className="homeImg" alt="home" />
            <h1 className={`${classHome}`}>Home</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)
export default Home
