import LogoutButton from '../LogoutButton'
import Header from '../Header'
import './index.css'

const About = () => (
  <>
    <div className="home-container">
      <Header />
      <div className="home-card">
        <h1 className="heading">About Route</h1>
        <LogoutButton />
      </div>
    </div>
  </>
)

export default About
