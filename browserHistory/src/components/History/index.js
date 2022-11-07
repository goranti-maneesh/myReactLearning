import './index.css'

const History = props => {
  const {historyDetails, deleteItem} = props
  const {timeAccessed, id, logoUrl, title, domainUrl} = historyDetails

  const onDelete = () => {
    deleteItem(id)
  }

  return (
    <li className="history-item">
      <div className="complete-details">
        <p className="time-style">{timeAccessed}</p>
        <div className="details-container">
          <img src={logoUrl} className="logo" alt="domain logo" />
          <div className="content">
            <p className="history">{title}</p>
            <p className="domain-url">{domainUrl}</p>
          </div>
        </div>
      </div>
      <button
        className="delete-button"
        type="button"
        onClick={onDelete}
        // eslint-disable-next-line react/no-unknown-property
        testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete-img"
        />
      </button>
    </li>
  )
}

export default History
