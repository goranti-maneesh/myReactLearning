import Header from '../Header'
import './index.css'

const NotFound = () => (
  <div>
    <Header />
    <div className="not-found-container">
      <img
        className="failure-img"
        alt="not found"
        src="https://assets.ccbp.in/frontend/react-js/jobby-app-not-found-img.png"
      />
      <h1 className="failure-heading">Page Not Found</h1>
      <p className="failure-content">
        we're sorry, the page you requested could not be found
      </p>
      <button type="button" className="btn login-btn">
        Retry
      </button>
    </div>
  </div>
)
export default NotFound
