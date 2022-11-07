import './index.css'
import {Link} from 'react-router-dom'

const Header = () => (
  <nav className="nav-header">
    <div className="header-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="website-logo"
      />
      <ul className="link-list">
        <Link to="/" className="link">
          <li>Home</li>
        </Link>
        <Link to="/products" className="link">
          <li>Products</li>
        </Link>
        <Link to="/cart" className="link">
          <li>Cart</li>
        </Link>
        <button className="logout-button" type="button">
          Logout
        </button>
        <button type="button" className="logout-mobile-btn">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
            alt="logout icon"
            className="logout-icon"
          />
        </button>
      </ul>
    </div>
  </nav>
)

export default Header
