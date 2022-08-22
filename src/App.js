import React from 'react'
import Navbar from './components/Navbar'
import './App.css'
import Home from './components/pages/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Category from './components/pages/Category'
import Billing from './components/pages/Billing'
import Order from './components/pages/Order'
import Report from './components/pages/Report'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Category" component={Category} />

          <Route path="/Billing" component={Billing} />
          <Route path="/Order" component={Order} />
          <Route path="/Report" component={Report} />
        </Switch>
      </Router>
    </>
  )
}

export default App
