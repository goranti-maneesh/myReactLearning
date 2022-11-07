import './App.css'

const TabListImageView = props => {
  const {imageListProps, activeIdProp, onClikFunctionProp} = props
  const filteredProjects = imageListProps.filter(
    eachItem => eachItem.category === activeIdProp,
  )
  const onClickFunction = thumbnailImageId => {
    onClikFunctionProp(thumbnailImageId)
  }
  console.log(filteredProjects)
  return (
    <div className="css-TabListImageView-div">
      <ul className="css-TabListImageView-ul">
        {filteredProjects.map(eachFilteredItem => (
          <li
            className="css-TabListImageView-thumbnail-div"
            key={eachFilteredItem.id}
          >
            <button
              type="button"
              className="css-TabList-Button"
              onClick={() => onClickFunction(eachFilteredItem.id)}
            >
              <img
                src={eachFilteredItem.thumbnailUrl}
                alt="thumbnail"
                className="css-thumbnail-image"
              />
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TabListImageView
