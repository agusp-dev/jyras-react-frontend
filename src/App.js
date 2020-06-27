import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Signin from './components/signin/signin'
import { Projects } from './components'
import AuthProvider from './utils/Auth'
import { PrivateRoute } from './utils'

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div>
          <PrivateRoute exact path='/' component={Projects} />
          <Route exact path='/signin' component={Signin} />
        </div>
      </Router>
    </AuthProvider>
    
  )
}

export default App;
