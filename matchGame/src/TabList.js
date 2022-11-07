import './App.css'

const TabList = props => {
  const {tabListProps, activeIdprop, onClickFunction} = props

  const onClickTabItem = tabId => {
    console.log(tabId)
    onClickFunction(tabId)
  }

  console.log(activeIdprop)
  return (
    <ul className="css-tabList-ul">
      {tabListProps.map(tabItem => (
        <li className="css-tabList-list" key={tabItem.tabId}>
          <button
            className={`css-TabList-Button ${
              tabItem.tabId === activeIdprop ? 'css-TabList-active' : ''
            }`}
            type="button"
            onClick={() => onClickTabItem(tabItem.tabId)}
          >
            {tabItem.displayText}
          </button>
        </li>
      ))}
    </ul>
  )
}

export default TabList
