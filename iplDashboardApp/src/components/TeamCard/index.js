// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {id, teamImageUrl, name} = teamDetails

  return (
    <Link to={`/team-matches/${id}`} className="link">
      <li className="list-item">
        <img src={teamImageUrl} className="image-url" alt={`${name}`} />
        <p className="card-heading">{name}</p>
      </li>{' '}
    </Link>
  )
}

export default TeamCard
