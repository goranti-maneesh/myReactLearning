import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <ul className="header-container">
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/about">About</Link>
    </li>
  </ul>
)
export default Header
