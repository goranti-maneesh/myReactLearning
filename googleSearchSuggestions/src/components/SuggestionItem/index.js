// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, updateSuggestion, id} = props
  const {suggestion} = suggestionDetails

  const onClickSuggestion = () => {
    updateSuggestion(id)
  }

  return (
    <li className="suggestion-item">
      <p className="suggestion">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        className="arrow"
        alt="arrow"
        onClick={onClickSuggestion}
      />
    </li>
  )
}

export default SuggestionItem
