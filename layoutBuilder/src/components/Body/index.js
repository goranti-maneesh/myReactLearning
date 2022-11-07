// Write your code here

import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      return (
        <div className="bodyCont">
          {showLeftNavbar ? (
            <div className="left">
              <h1>Left Navbar Menu</h1>
              <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
              </ul>
            </div>
          ) : null}
          {showContent ? (
            <div className="center">
              <h1>Content</h1>
              <p>Lorem ipsum</p>
            </div>
          ) : null}
          {showRightNavbar ? (
            <div className="right">
              <h1>Right Navbar Menu</h1>
              <p>Ad 1</p>
              <p>Ad 2</p>
            </div>
          ) : null}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
