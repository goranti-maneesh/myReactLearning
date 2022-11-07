// Write your code here

import {Component} from 'react'
import './index.css'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {teamCardsList: [], isLoading: true}

  componentDidMount() {
    this.getTeamCardsList()
  }

  getTeamCardsList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data

    const formattedData = teams.map(eachCardItem => ({
      id: eachCardItem.id,
      teamImageUrl: eachCardItem.team_image_url,
      name: eachCardItem.name,
    }))
    this.setState({teamCardsList: formattedData, isLoading: false})
  }

  renderHomeContainer = () => {
    const {teamCardsList} = this.state
    return (
      <div className="homeContainer">
        <div className="headImgBox">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="iplLogo"
          />

          <h1 className="mainHeading">IPL Dashboard</h1>
        </div>
        <ul className="teamCardsList">
          {teamCardsList.map(eachCardItem => (
            <TeamCard teamDetails={eachCardItem} key={eachCardItem.id} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="loaderOrHomeComponent">
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} />
          </div>
        ) : (
          this.renderHomeContainer()
        )}
      </div>
    )
  }
}

export default Home
