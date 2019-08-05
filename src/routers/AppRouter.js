import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from '../components/App'
import LoginPage from '../components/LoginPage'
import IncomePage from '../components/IncomePage'

const AppRouter = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={ App } />
      <Route path="/income" component={ IncomePage } />
    </Switch>
  </Router>
)

export default AppRouter
