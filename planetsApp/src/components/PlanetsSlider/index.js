// Write your code here
import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'
import './index.css'

const PlanetsSlider = props => {
  const settings = {
    dots: false,
    slidesToScroll: 1,
    slidesToShow: 1,
  }
  const {planetsList} = props

  return (
    <div className="planets-container" testid="planets">
      <h1 className="planet-title">Planets</h1>
      <Slider {...settings}>
        {planetsList.map(eachMovie => (
          <PlanetItem key={eachMovie.id} planetList={eachMovie} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider
