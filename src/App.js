import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Signin, Projects, NoMatchPage } from './components'
import { PrivateRoute } from './utils'

export const AuthContext = React.createContext()

const App = () => {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path='/' component={Projects} />
        <Route exact path='/signin' component={Signin} />
        <Route component={NoMatchPage} />
      </Switch>
    </Router>
  )
}

export default App;
