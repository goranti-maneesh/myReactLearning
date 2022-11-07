// Write your code here
import {Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'

import './index.css'

const Header = () => (
  <div className="navbar-container">
    <nav className="navbar">
      <Link to="/" className="nav-link">
        <img
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          alt="website logo"
          className="website-logo"
        />
      </Link>
      <Popup
        modal
        trigger={
          <button
            type="button"
            className="ham-burger-button"
            testid="hamburgerIconButton"
          >
            <GiHamburgerMenu className="ham-burger-icon" />
          </button>
        }
        className="popup-content"
      >
        {close => (
          <div className="modal-container">
            <button
              type="button"
              testid="closeButton"
              onClick={() => close()}
              className="close-button"
            >
              <IoMdClose className="nav-icon" />
            </button>
            <ul className="modal-items">
              <Link to="/" className="nav-link" onClick={() => close()}>
                <li className="modal-item">
                  <AiFillHome className="nav-icon" />
                  <h1 className="path-text">Home</h1>
                </li>
              </Link>
              <Link to="/about" className="nav-link" onClick={() => close()}>
                <li className="modal-item">
                  <BsInfoCircleFill className="nav-icon" />
                  <h1 className="path-text">About</h1>
                </li>
              </Link>
            </ul>
          </div>
        )}
      </Popup>
    </nav>
  </div>
)

export default Header
