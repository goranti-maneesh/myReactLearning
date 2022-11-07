import {withRouter} from 'react-router-dom'

import cookies from 'js-cookie'

const LogoutButton = props => {
  const onClickLogout = () => {
    cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <button type="button" className="button" onClick={onClickLogout}>
      Logout
    </button>
  )
}

export default withRouter(LogoutButton)
