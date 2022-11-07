// Write your code here
import {Component} from 'react'

import './index.css'

const HEAD_IMAGE_URL = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const TAIL_IMAGE_URL = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    tossResultImage: HEAD_IMAGE_URL,
    headsCount: 0,
    tailsCount: 0,
  }

  onClickTossGame = () => {
    const {headsCount, tailsCount} = this.state
    const tossResult = Math.floor(Math.random() * 2)
    console.log(tossResult)
    let tossImage = ''
    let totalHeadsCount = headsCount
    let totalTailsCount = tailsCount

    if (tossResult === 0) {
      tossImage = HEAD_IMAGE_URL
      totalHeadsCount += 1
    } else {
      tossImage = TAIL_IMAGE_URL
      totalTailsCount += 1
    }
    this.setState({
      tossResultImage: tossImage,
      headsCount: totalHeadsCount,
      tailsCount: totalTailsCount,
    })
  }

  render() {
    const {tossResultImage, headsCount, tailsCount} = this.state
    const totalCount = headsCount + tailsCount

    return (
      <div className="app-container">
        <div className="coin-toss-container">
          <div className="card-container">
            <div className="card">
              <h1 className="main-heading">Coin Toss Game</h1>
              <p className="main-paragraph">Heads (or) Tails</p>
              <img
                src={tossResultImage}
                className="toss-result"
                alt="toss result"
              />
              <button
                type="button"
                className="toss-button"
                onClick={this.onClickTossGame}
              >
                Toss Coin
              </button>
              <p className="paragraph">Total: {totalCount}</p>
              <p className="paragraph">Heads: {headsCount}</p>
              <p className="paragraph">Tails: {tailsCount}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
