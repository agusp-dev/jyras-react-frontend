import React, { useContext, Fragment } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { MenuAppBar } from '../components'

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  
  const user = localStorage.getItem('user')
  console.log('PrivateRoute localstorage user', user)

  return (
    <Route 
      {...rest}
      render={routeProps => 
        !!user ? (
          <Fragment>
            <MenuAppBar />
            <RouteComponent {...routeProps} />
          </Fragment>
        ) : (
          <Redirect to={'/signin'} />
        )
      }
    />
  )
}

export { PrivateRoute }