import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {isClick: true}

  onClicked = () => {
    this.setState({isClick: false})
  }

  render() {
    const {isClick} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources

    return (
      <div className="bg-container">
        <div className="card-container">
          {isClick ? (
            <>
              <h1 className="main-heading">
                How satisfied are you with our customer support performance
              </h1>
              <ul className="list-container">
                {emojis.map(eachEmoji => (
                  <li key={eachEmoji.id} className="emoji-container">
                    <img
                      src={eachEmoji.imageUrl}
                      className="emoji-image"
                      alt={eachEmoji.name}
                      key={eachEmoji.id}
                      onClick={this.onClicked}
                    />

                    <p className="emoji-name">{eachEmoji.name}</p>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <div className="thankyou-container">
              <img src={loveEmojiUrl} className="love-image" alt="love emoji" />
              <h1 className="title">Thank You!</h1>
              <p className="paragraph">
                We will use feedback to improve our customer support performance
              </p>
            </div>
          )}
        </div>
      </div>
    )
  }
}
export default Feedback
