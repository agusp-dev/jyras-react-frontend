import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Signin, NoMatchPage, PrivateRoute } from './components'
import { Projects, SelectedProject } from './view'
import IconButton from '@material-ui/core/IconButton'
import { Apps, People  } from '@material-ui/icons'

export const AuthContext = React.createContext()

const dashRoutes = [
  {
    name: 'Projects',
    path: '/',
    icon: <Apps style={{fontSize: '28px'}}/>
  },
  {
    name: 'Members',
    path: '/members',
    icon: <People style={{fontSize: '28px'}}/>
  },
]

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/signin' component={Signin} />
        <PrivateRoute 
          exact path='/' 
          component={Projects}
          routes={dashRoutes} />
        <PrivateRoute 
          exact path='/project' 
          component={SelectedProject}
          routes={dashRoutes} />
        <Route component={NoMatchPage} />
      </Switch>
    </Router>
  )
}

export default App;