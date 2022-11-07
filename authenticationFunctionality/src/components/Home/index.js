import LogoutButton from '../LogoutButton'
import Header from '../Header'
import './index.css'

const Home = () => (
  <div className="home-container">
    <Header />

    <h1 className="heading">Home Route</h1>
    <LogoutButton />
  </div>
)

export default Home
