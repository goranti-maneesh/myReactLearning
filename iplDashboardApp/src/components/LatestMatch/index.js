// Write your code here

import {Component} from 'react'
import './index.css'

class LatestMatch extends Component {
  render() {
    const {latestDetails} = this.props
    const {
      umpires,
      venue,
      date,
      manOfTheMatch,
      competingTeam,
      competingTeamLogo,
      result,
      firstInnings,
      secondInnings,
    } = latestDetails
    return (
      <div className="LatestMatchContainer">
        <div className="leftBox">
          <p className="teamHeading">{competingTeam}</p>
          <p className="date">{date}</p>
          <p className="resStatusText">{venue}</p>
          <p className="resStatusText">{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="latest-image"
        />

        <div className="rightBox">
          <h1 className="inningsHeading">First Innings</h1>
          <p className="values-latest">{firstInnings}</p>

          <h1 className="inningsHeading">Second Innings</h1>
          <p className="values-latest">{secondInnings}</p>

          <h1 className="inningsHeading">Man Of The Match</h1>
          <p className="values-latest">{manOfTheMatch}</p>

          <h1 className="inningsHeading">Umpires</h1>
          <p className="values-latest">{umpires}</p>
        </div>
      </div>
    )
  }
}
export default LatestMatch
