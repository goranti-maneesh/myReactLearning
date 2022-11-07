// Write your code here
import './index.css'

const PlanetItem = props => {
  const {planetList} = props
  const {imageUrl, name, description} = planetList
  return (
    <div className="list-item-container">
      <img src={imageUrl} alt={`planet ${name}`} className="planets" />
      <h1 className="heading">{name}</h1>
      <p className="details">{description}</p>
    </div>
  )
}

export default PlanetItem
