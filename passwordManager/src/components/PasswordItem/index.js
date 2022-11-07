import './index.css'

const PasswordItem = props => {
  const {passwordDetails, isChecked, deletePasswordDetails} = props
  const {
    id,
    website,
    username,
    password,
    initialBackgroundClassName,
  } = passwordDetails

  const deletePassword = () => {
    deletePasswordDetails(id)
  }

  return (
    <li className="password-list-item">
      <div className={initialBackgroundClassName}>
        <p>{website.slice(0, 1)}</p>
      </div>
      <div className="password-details">
        <p className="password-text">{website}</p>
        <p className="password-text">{username}</p>
        {isChecked ? (
          <p className="password-text">{password}</p>
        ) : (
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            alt="stars"
            className="stars-img"
          />
        )}
      </div>
      <div>
        <button
          type="button"
          className="delete-btn"
          onClick={deletePassword}
          testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
            className="delete-img"
          />
        </button>
      </div>
    </li>
  )
}

export default PasswordItem
