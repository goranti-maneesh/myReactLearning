import './App.css'

const GameOver = props => {
  const {scoreProp, refreshDataFunctionProp} = props

  const refreshData = () => {
    refreshDataFunctionProp()
  }
  return (
    <div className="css-GameOver-div">
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
          alt="trophy"
          className="css-GameOver-image"
        />
      </div>
      <div className="css-GameOver-yourscore">
        <p>YOUR SCORE</p>
        <h1>{scoreProp}</h1>
      </div>
      <div>
        <button
          type="button"
          onClick={refreshData}
          className="css-GameOver-button-div"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
            alt="reset"
          />
          PLAY AGAIN
        </button>
      </div>
    </div>
  )
}
export default GameOver
