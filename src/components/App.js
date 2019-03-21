import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './Login'
import Service from './Service'

class App extends Component {
  render() {
    return (
      <Router>
        <Route path='/' exact={true} component={Login} />
        <Route path='/service' component={Service} />
      </Router>
    );
  }
}

export default App;