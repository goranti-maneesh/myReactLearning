// Write your code here.
import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  state = {
    isActive: false,
    activeId: null,
  }

  showContent = id => {
    this.setState(prevState => ({
      activeId: id,
      isActive: !prevState.isActive,
    }))
  }

  render() {
    const {faqsList} = this.props
    const {activeId} = this.state
    console.log(faqsList)

    return (
      <div className="main-container">
        <div className="card">
          <h1 className="head">FAQs</h1>
          <ul className="listed">
            {faqsList.map(each => (
              <FaqItem
                content={each}
                key={each.id}
                state={this.state}
                activeId={activeId}
                viewContent={this.showContent}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
