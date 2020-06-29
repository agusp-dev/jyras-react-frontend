import React, { Fragment } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { MenuAppBar } from '../components'

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  
  let user = localStorage.getItem('user')
  if (user) {
    user = JSON.parse(user)
  }

  return (
    <Route 
      {...rest}
      render={routeProps => 
        !!user ? (
          <Fragment>
            <MenuAppBar userEmail={user.email}/>
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