import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Signin, Projects } from './components'
import { PrivateRoute } from './utils'

export const AuthContext = React.createContext()

const App = () => {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path='/' component={Projects} />
        <Route exact path='/signin' component={Signin} />
      </Switch>
    </Router>
  )
}

export default App;
