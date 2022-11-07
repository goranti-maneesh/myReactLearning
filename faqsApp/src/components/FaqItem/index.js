// Write your code here.

import './index.css'

const FaqItem = props => {
  const {content, viewContent, activeId, state} = props
  const {id, questionText, answerText} = content

  let isTrue = false

  if (activeId === id) {
    const {isActive} = state
    isTrue = isActive
  }

  const changeType = () => {
    viewContent(id)
  }

  return (
    <li className="card-item">
      <div className="card-head">
        <h1 className="heading">{questionText}</h1>
        <button className="open" type="button" onClick={changeType}>
          {isTrue ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png"
              alt="minus"
              className="logo"
            />
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
              alt="plus"
              className="logo"
            />
          )}
        </button>
      </div>
      {isTrue && (
        <>
          <hr />
          <p className="para">{answerText}</p>
        </>
      )}
    </li>
  )
}

export default FaqItem
