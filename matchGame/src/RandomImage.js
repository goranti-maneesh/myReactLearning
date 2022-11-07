import './App.css'

const RandomImage = props => {
  const {imageUrlProp} = props

  console.log(imageUrlProp)
  return (
    <>
      <div className="css-randomImage-div">
        <img src={imageUrlProp} alt="match" className="css-randomImage-image" />
      </div>
    </>
  )
}

export default RandomImage
