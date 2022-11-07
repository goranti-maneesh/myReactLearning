import './index.css'

const registrationStatus = {
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationsClosed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {activeEventRegistrationStatus} = props

  const renderNoActiveView = () => (
    <p>Click on Event ,to view its registration details</p>
  )

  const renderRegisteredView = () => (
    <div className="registered-container">
      <img
        className="registered-img"
        alt="registeredImage"
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
      />
      <p>You Have already registered for the event</p>
    </div>
  )

  const renderLiveRigistration = () => (
    <div className="registered-container">
      <img
        className="live-image"
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="live"
      />
      <p>
        A live performance brings so much to your relationship with dance .
        seeing dance.
      </p>
      <button className="button" type="button">
        Register Here
      </button>
    </div>
  )
  const renderRegistrationClosed = () => (
    <div className="registered-container">
      <img
        className="closed-image"
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="closed"
      />
      <h className="closed-heading">Registration Are Closed Now</h>
      <p>stay turned.We will reopen</p>
      <p>the registrations soon!</p>
    </div>
  )

  const renderActiveItem = () => {
    switch (activeEventRegistrationStatus) {
      case registrationStatus.yetToRegister:
        return renderLiveRigistration()
      case registrationStatus.registered:
        return renderRegisteredView()
      case registrationStatus.registrationsClosed:
        return renderRegistrationClosed()
      default:
        return renderNoActiveView()
    }
  }

  return (
    <div className="registration-status-container">{renderActiveItem()}</div>
  )
}
export default ActiveEventRegistrationDetails
