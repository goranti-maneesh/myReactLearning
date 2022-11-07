import {Switch, Redirect, BrowserRouter, Route} from 'react-router-dom'

import JobDetailedView from './components/JobDetailedView'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'
import Jobs from './components/Jobs'
import NotFound from './components/NotFound'
import LoginForm from './components/Login'
import SignIn from './components/SignIn'

import './App.css'

// These are the lists used in the application. You can move them to any component needed.

// Replace your code here
const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={LoginForm} />
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute exact path="/jobs" component={Jobs} />
      <ProtectedRoute exact path="/jobs/:id" component={JobDetailedView} />
      <Route exact path="/sign-in" component={SignIn} />
      <Route path="/not-found" component={NotFound} />
      <Redirect to="/not-found" />
    </Switch>
  </BrowserRouter>
)

export default App
