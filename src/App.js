import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import './App.css'

import Home from './home/home'
import One from './requirements/one/one'
import Two from './requirements/two/two'
import Three from './requirements/three/three'
import Four from './requirements/four/four'

class App extends Component {
  render () {
    return (
    <Router>
      <div className="container">
        <div>
          <nav>
            <ul className="nav nav-tabs">
              <li>
                <Link to="/Home">Home</Link>
              </li>
              <li>
                <Link to="/One">One</Link>
              </li>
              <li>
                <Link to="/Two">Two</Link>
              </li>
              <li>
                <Link to="/Three">Three</Link>
              </li>
              <li>
                <Link to="/Four">Four</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/Home">
              <Home/>
            </Route>
            <Route path="/One">
              <One/>
            </Route>
            <Route path="/Two">
              <Two/>
            </Route>
            <Route path="/Three">
              <Three/>
            </Route>
            <Route path="/Four">
              <Four/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
    )
  }
}

export default App
