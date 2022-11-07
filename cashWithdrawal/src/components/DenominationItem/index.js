// Write your code here

import './index.css'

const DenominationItem = props => {
  const {denomination, chooseButton} = props

  const {value} = denomination

  const oncli = () => {
    chooseButton(value)
  }

  return (
    <li className="litstItem">
      <button className="cashButton" type="button" onClick={oncli}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
