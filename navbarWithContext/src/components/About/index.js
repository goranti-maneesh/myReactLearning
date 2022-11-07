// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const imgHome = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
      const classHome = isDarkTheme ? 'head' : 'head1'
      const divHome = isDarkTheme ? 'homeDiv' : 'homeDiv1'
      console.log(isDarkTheme)
      return (
        <>
          <Navbar />
          <div className={`${divHome}`}>
            <img src={imgHome} className="homeImg" alt="about" />
            <h1 className={`${classHome}`}>About</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)
export default About
