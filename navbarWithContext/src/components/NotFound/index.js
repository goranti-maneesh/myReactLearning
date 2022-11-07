// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkThem} = value
      const foundClass = isDarkThem ? 'notDiv' : 'notDiv1'

      return (
        <>
          <Navbar />

          <div className={`${foundClass}`}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              className="homeImg"
              alt="not found"
            />
            <h1>Lost Your Way</h1>
            <p>We cannot seem to find the page</p>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
