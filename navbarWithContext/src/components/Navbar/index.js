// Write your code here
import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const getChange = () => {
        toggleTheme()
      }

      const imgUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
      const imgTheme = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
      const classDiv = isDarkTheme ? 'navDark' : 'navLight'

      return (
        <>
          <div className={`${classDiv}`}>
            <img src={imgUrl} className="img1" alt="website logo" />
            <ul className="unorder">
              <li className="list">
                <Link to="/">Home </Link>
              </li>

              <li className="list">
                <Link to="/about">About</Link>
              </li>
            </ul>
            <button
              type="button"
              className="img1"
              onClick={getChange}
              testid="theme"
            >
              <img src={imgTheme} className="img1" alt="theme" />
            </button>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)
export default Navbar
