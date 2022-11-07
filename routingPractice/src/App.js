import {Route, Switch} from 'react-router-dom'

import Header from './components/Header/index'
import About from './components/About/index'
import Contact from './components/Contact/index'
import Home from './components/Home/index'
import NotFound from './components/NotFound/index'

import './App.css'

const App = () => (
  <div className="bg-container">
    <Header />
    <div className="app-container">
      <Switch />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route component={NotFound} />

      <Switch />
    </div>
  </div>
)

export default App
