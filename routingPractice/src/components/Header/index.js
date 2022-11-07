import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="nav-container">
    <div className="logo-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="logo"
      />
      <h1 className="title">Wave</h1>
    </div>
    <ul className="list">
      <li className="list-item">
        <Link className="para" to="/">
          Home
        </Link>
      </li>
      <li className="list-item">
        <Link className="para" to="/about">
          About
        </Link>
      </li>
      <li className="list-item">
        <Link className="para" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
