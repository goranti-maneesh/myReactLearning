// Write your code here

import {Component} from 'react'
import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {count: 2000}

  chooseButton = value => {
    console.log(`button clicked ${value}`)

    this.setState(prevState => ({count: prevState.count - value}))
  }

  render() {
    const {count} = this.state
    const {denominationsList} = this.props
    return (
      <div className="background">
        <div className="cardContainer">
          <div className="profileSection">
            <p className="profilePic">KG</p>
            <p className="profileName">Kishor Guriti</p>
          </div>
          <div className="balanceSection">
            <p className="balanceText">Your Balance</p>
            <p className="balanceAmount">
              {count}
              <br />
              <span className="rupees">In Rupees</span>
            </p>
          </div>

          <div className="withdrawSection">
            <h1 className="withdrawText">Withdraw</h1>
            <p className="withdrawInst">CHOOSE SUM (IN RUPEES)</p>
          </div>
          <div>
            <ul className="arrangeButtons">
              {denominationsList.map(each => (
                <DenominationItem
                  denomination={each}
                  key={each.id}
                  chooseButton={this.chooseButton}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
