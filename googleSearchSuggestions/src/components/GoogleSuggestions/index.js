// Write your code here
import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  updateSuggestion = id => {
    console.log(id, 'id')
    this.setState({searchInput: 'Price of Ethereum today'})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const searchResults = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(searchInput),
    )

    return (
      <div className="app-container">
        <div className="container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            className="logo"
            alt="google logo"
          />

          <ul className="suggestions-container">
            <div className="search-container">
              <img
                alt="search icon"
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                className="search"
              />
              <input
                type="search"
                onChange={this.onChangeSearchInput}
                value={searchInput}
                placeholder="Search Google"
                className="search-box"
              />
            </div>
            {searchResults.map(eachSuggestion => (
              <SuggestionItem
                suggestionDetails={eachSuggestion}
                key={eachSuggestion.id}
                updateSuggestion={this.updateSuggestion}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
