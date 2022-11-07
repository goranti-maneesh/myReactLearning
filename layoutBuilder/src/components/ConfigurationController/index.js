// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => {
  console.log('body')
  return (
    <ConfigurationContext.Consumer>
      {value => {
        const {
          showContent,
          showLeftNavbar,
          showRightNavbar,
          onToggleShowContent,
          onToggleShowLeftNavbar,
          onToggleShowRightNavbar,
        } = value

        const changeContent = () => {
          onToggleShowContent()
        }

        const changeLeft = event => {
          onToggleShowLeftNavbar(event.target.value)
        }

        const changeRight = event => {
          onToggleShowRightNavbar(event.target.value)
        }

        return (
          <div className="container">
            <h1>Layout</h1>
            <div>
              <input
                type="checkbox"
                checked={showContent}
                id="Content"
                onChange={changeContent}
              />
              <label htmlFor="Content">Content</label>
            </div>
            <div>
              <input
                type="checkbox"
                checked={showLeftNavbar}
                id="left"
                onChange={changeLeft}
              />
              <label htmlFor="left">Left Navbar</label>
            </div>
            <div>
              <input
                type="checkbox"
                checked={showRightNavbar}
                id="right"
                onChange={changeRight}
              />
              <label htmlFor="right">Right Navbar</label>
            </div>
          </div>
        )
      }}
    </ConfigurationContext.Consumer>
  )
}
export default ConfigurationController
