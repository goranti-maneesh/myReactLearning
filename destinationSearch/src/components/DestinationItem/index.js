import './index.css'

const DestinationItem = props => {
  const {destinationDetails} = props
  const {imageurl, name} = destinationDetails

  return (
    <li className="container">
      <img className="image" alt={name} src={imageurl} />
      <p className="name">{name}</p>
    </li>
  )
}

export default DestinationItem
