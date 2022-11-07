// Write your JS code here
import {Redirect, Route} from 'react-router-dom'
import Cookies from 'js-cookie'

const ProtectedRoute = props => {
  const Token = Cookies.get('jwt_token')

  if (Token === undefined) {
    return <Redirect to="/login" />
  }
  return <route {...props} />
}
export default ProtectedRoute
