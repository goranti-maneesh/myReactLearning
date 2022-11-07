// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {Mango: 0, Banana: 0}

  eatMango = () => {
    this.setState(prevState => ({Mango: prevState.Mango + 1}))
  }

  eatBanana = () => {
    this.setState(prevState => ({Banana: prevState.Banana + 1}))
  }

  render() {
    const {Mango} = this.state
    const {Banana} = this.state

    return (
      <div className="main-container">
        <div className="container">
          <h1 className="heading">
            Bob ate {Mango} mangoes and {Banana} bananas
          </h1>
          <div className="img-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/mango-img.png "
              className="image"
              alt="mango"
            />
            <button className="button" type="button" onClick={this.eatMango}>
              Eat Mango
            </button>
          </div>
          <div className="img-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png "
              className="image"
              alt="banana"
            />
            <button className="button" type="button" onClick={this.eatBanana}>
              Eat Banana
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
