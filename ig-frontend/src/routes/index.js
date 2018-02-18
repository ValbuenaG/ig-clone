import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import Home from './home'
import Toolbar from './toolbar'

const Signup = ()=>[
  <Toolbar/>,
  <h1>signup</h1>
]

export default ()=>(
  <Router>
    <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/signup' exact component={Signup}/>
    </Switch>
  </Router>
)