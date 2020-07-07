import React, { Fragment } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { MenuAppBar } from '..'
import PropTypes from 'prop-types'

const PrivateRoute = ({routes, component: RouteComponent, ...rest }) => {
  
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
              routes={routes}
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

PrivateRoute.propTypes = {
  routes: PropTypes.array.isRequired
}

export { PrivateRoute }