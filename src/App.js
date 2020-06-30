import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Signin, NoMatchPage, PrivateRoute } from './components'
import { Projects, SelectedProject } from './view'

export const AuthContext = React.createContext()

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/signin' component={Signin} />
        <PrivateRoute exact path='/' component={Projects} />
        <PrivateRoute exact path='/project' component={SelectedProject} />
        <Route component={NoMatchPage} />
      </Switch>
    </Router>
  )
}

export default App;
