import {BsSearch} from 'react-icons/bs'
import './index.css'

const FiltersGroup = props => {
  const renderRatingsList = () => {
    const {ratingsList} = props

    return ratingsList.map(rating => {
      const {activeRatingId, changeRating} = props

      const onClickRatingItem = () => {
        changeRating(rating.ratingId)
      }
      const ratingClassName =
        activeRatingId === rating.ratingId ? 'and-up active-rating' : 'and-up'

      return (
        <li
          key={rating.ratingId}
          onClick={onClickRatingItem}
          className="rating-item"
        >
          <img
            src={rating.imageUrl}
            alt={rating.ratingId}
            className="rating-img"
          />

          <p className={ratingClassName}>& up</p>
        </li>
      )
    })
  }

  const renderedRatingList = () => (
    <div>
      <h1 className="category-rating-heading">Rating</h1>
      <ul className="category-rating-name">{renderRatingsList()}</ul>
    </div>
  )

  const renderCategoryList = () => {
    const {categoryOptions} = props

    return categoryOptions.map(category => {
      const {changeCategory, activeCategoryId} = props

      const onClickCategory = () => {
        changeCategory(category.categoryId)
      }
      const categoryClassName =
        activeCategoryId === category.categoryId
          ? 'border-category'
          : 'category'

      return (
        <li
          key={category.categoryId}
          onClick={onClickCategory}
          className="category-item"
        >
          <p className={`category-name ${categoryClassName}`}>
            {category.name}
          </p>
        </li>
      )
    })
  }

  const renderedCategoryList = () => (
    <div>
      <h1 className="category-rating-heading">Category</h1>
      <ul className="category-rating-name">{renderCategoryList()}</ul>
    </div>
  )

  const enterSearchInput = event => {
    const {onChangeKey} = props
    if (event.key === 'Enter') {
      onChangeKey()
    }
  }

  const onChangeSearchInput = event => {
    const {changeSeacrhInput} = props
    changeSeacrhInput(event.target.value)
  }

  const renderSearchInput = () => {
    const {searchInput} = props

    return (
      <div className="input-container">
        <input
          type="search"
          className="input"
          placeholder="Search"
          value={searchInput}
          onChange={onChangeSearchInput}
          onKeyDown={enterSearchInput}
        />
        <BsSearch className="search-icon" />
      </div>
    )
  }

  const {onClearFilters} = props

  return (
    <div className="filters-group-container">
      {renderSearchInput()}
      {renderedCategoryList()}
      {renderedRatingList()}
      <button type="button" className="clear-button" onClick={onClearFilters}>
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
