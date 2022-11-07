// Write your code here
import {Component} from 'react'
import './index.css'

class MatchCard extends Component {
  render() {
    const {matchDetails} = this.props
    const {competingTeamLogo, competingTeam, result, matchStatus} = matchDetails
    const colorClassName = matchStatus === 'Won' ? 'won' : 'lost'
    return (
      <li className="MatchCardContainer">
        <img
          src={competingTeamLogo}
          alt={`competing team ${competingTeam}`}
          className="cardImg"
        />
        <p className="cardTeamName">{competingTeam}</p>
        <p className="result">{result}</p>
        <p className={`matchStatus ${colorClassName}`}>{matchStatus}</p>
      </li>
    )
  }
}
export default MatchCard
