import React from 'react'
import Header from './components/header/header'
import Signup from './pages/signup'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Logout from './pages/logout'
import Index from './pages'

const App = () => {
  return (
    
      <Router>
        <Header />
        <Route path="/" exact component={Index} />
        <Route path="/signup" component={Signup} />
        <Route path="/logout" component={Logout} />
      </Router>

  )
}

export default App
