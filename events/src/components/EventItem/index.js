import './index.css'

const EventItem = props => {
  const {eventDetails, setActiveEventId, isActive} = props
  const {id, imageUrl, name, location} = eventDetails
  const activeTab = isActive ? 'button-img border-style' : 'button-img'

  const onClickEvent = () => {
    setActiveEventId(id)
  }

  return (
    <li className="event-item">
      <button className="event-button " type="button" onClick={onClickEvent}>
        <img src={imageUrl} alt={name} className={activeTab} />
      </button>
      <p className="name">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}
export default EventItem
