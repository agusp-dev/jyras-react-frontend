import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { userAuthService } from '../../service' 
import { Redirect, NavLink } from 'react-router-dom'
import { useStyles } from './styles'
import AppBar from '@material-ui/core/AppBar'
import { Toolbar, Tooltip } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import { AccountCircle } from '@material-ui/icons'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import Logo from '../../assets/logo/logo_white_large_horizontal.png'
import { Typography, Grid } from '@material-ui/core'

const MenuAppBar = ({routes, name, surname}) => {

  const classes = useStyles()

  const [anchorEl, setAnchorEl] = useState(null);
  const [logout, setLogout] = useState(false)

  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    try {
      await userAuthService.firebaseLogout()
      localStorage.removeItem('user')
      setLogout(true)
    } catch(error) {
      alert(error)
    }
  }

  if (logout) {
    return <Redirect to='/' />
  }

  return (
    <AppBar className={classes.appbar} position="static">
      <Toolbar>
        <Grid container>
          <Grid item xs={12} sm={2} container className={classes.logoContainer}>
            <NavLink to='/'>
              <img src={Logo} alt="Logo" className={classes.logo}/>
            </NavLink>
          </Grid>
          <Grid item xs={12} sm={8} className={classes.routesNav}>
            <div className={classes.root}>
              {routes.map((route, key) => {
                return (
                  <Tooltip title={route.name} key={key}>
                    <NavLink to={route.path} key={key}>
                      <IconButton color='primary' className={classes.navButton}>
                        {route.icon}
                      </IconButton>
                    </NavLink>
                  </Tooltip>
                )
              })}
            </div>
          </Grid>
          <Grid item xs={12} sm={2} container className={classes.menuNav}> 
            <Typography>
              {name && surname ? `${name} ${surname}` : 'Ghest'}
            </Typography>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

MenuAppBar.propTypes = {
  routes: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired
}

export { MenuAppBar }