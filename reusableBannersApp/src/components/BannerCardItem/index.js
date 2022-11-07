import './index.css'

const BannerCardsDetails = props => {
  const {cardDetail} = props
  const {headerText, description, className} = cardDetail

  return (
    <li className={`card ${className}`}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="para">{description}</p>
        <button className="button">Show More</button>
      </div>
    </li>
  )
}

export default BannerCardsDetails
