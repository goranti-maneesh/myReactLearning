import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

const Header = props => {
  const logoutToLogin = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <div className="header-container">
      <Link to="/">
        <img
          className="logo-img"
          alt="website logo"
          src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
        />
      </Link>
      <ul className="home-jobs-container">
        <Link to="/" className="react-link">
          <li className="header-names">Home</li>
        </Link>
        <Link to="./jobs" className="react-link">
          <li className="header-names">Jobs</li>
        </Link>
      </ul>
      <button onClick={logoutToLogin} type="button" className="logout-btn">
        <li> Logout</li>
      </button>
    </div>
  )
}
export default withRouter(Header)
