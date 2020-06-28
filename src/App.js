import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Signin, Projects } from './components'
import { AuthProvider, PrivateRoute } from './utils'

export const AuthContext = React.createContext()

const App = () => {
  return (
    // <AuthContext>
      <Router>
        <div>
          <PrivateRoute exact path='/' component={Projects} />
          <Route exact path='/signin' component={Signin} />
        </div>
      </Router>
    // </AuthContext>
  )
}

export default App;
