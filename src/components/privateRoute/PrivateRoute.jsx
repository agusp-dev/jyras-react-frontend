import React, { Fragment } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { MenuAppBar } from '..'

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
            <MenuAppBar 
              name={user.name}
              surname={user.surname} />
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