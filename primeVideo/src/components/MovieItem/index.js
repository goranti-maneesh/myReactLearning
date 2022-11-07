import Popup from 'reactjs-popup'
import {IoMdClose} from 'react-icons/io'

import 'reactjs-popup/dist/index.css'

import ReactPlayer from 'react-player'

import './index.css'

const MovieItem = props => {
  const settings = {
    playing: true,
    controls: true,
    loop: true,
    light: true,
    volume: 1,
  }
  const {details} = props
  const {thumbnailUrl, videoUrl} = details
  return (
    <li className="listItem">
      <div className="popup-container">
        <Popup
          modal
          trigger={
            <button className="trigger-button" type="button">
              <img
                className="thumbnailUrl"
                src={thumbnailUrl}
                alt="thumbnail"
              />
            </button>
          }
          className="popup-content"
        >
          {close => (
            <div className="card">
              <div className="player-wrapper">
                <ReactPlayer
                  className="react-player"
                  url={videoUrl}
                  width={400}
                  {...settings}
                />
              </div>
              <div className="closeButtonContainer">
                <button
                  type="button"
                  className="trigger-button"
                  onClick={() => close()}
                >
                  <IoMdClose />
                </button>
              </div>
            </div>
          )}
        </Popup>
      </div>
    </li>
  )
}
export default MovieItem
