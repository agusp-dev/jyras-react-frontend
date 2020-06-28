import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { AuthContext } from './Auth'

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  
  const user = localStorage.getItem('user')
  console.log('PrivateRoute localstorage user', user)

  return (
    <Route 
      {...rest}
      render={routeProps => 
        !!user ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={'/signin'} />
        )
      }
    />
  )
}

export { PrivateRoute }