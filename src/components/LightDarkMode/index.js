import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {
    isLightMode: false,
  }

  onClickToChange = () => {
    this.setState(prevState => ({isLightMode: !prevState.isLightMode}))
  }

  render() {
    const {isLightMode} = this.state
    const modeClassName = isLightMode ? 'lightmode' : 'darkmode'
    const btnText = isLightMode ? 'Dark Mode' : 'Light Mode'

    return (
      <div className="bg-container">
        <div className={`container ${modeClassName}`}>
          <h1 className="heading">Click To Change Mode</h1>
          <button
            type="button"
            className="button"
            onClick={this.onClickToChange}
          >
            {btnText}
          </button>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
