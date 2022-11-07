// Write your code here.
import './index.css'

const CardItem = props => {
  const {bannerDetails} = props

  const {title, description, imgUrl, className} = bannerDetails

  return (
    <div>
      <li className={`${className} banner-card`}>
        <h1 className="heading">{title}</h1>

        <p className="description">{description}</p>

        <div className="img-container">
          <img className="image" src={imgUrl} alt={title} />
        </div>
      </li>
    </div>
  )
}
