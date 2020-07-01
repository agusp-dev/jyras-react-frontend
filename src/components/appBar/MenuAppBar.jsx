import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import { userAuthService } from '../../service' 
import { Redirect } from 'react-router-dom'
import { useStyles } from './styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import AccountCircle from '@material-ui/icons/AccountCircle'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import Logo from '../../assets/logo/logo_white_large_horizontal.png'
import { Typography } from '@material-ui/core'

const MenuAppBar = ({name, surname}) => {

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

  const handleLogout = useCallback(
    async event => {
      event.preventDefault()
      await userAuthService.firebaseLogout()
      localStorage.removeItem('user')
      setLogout(true)
    }
  )

  if (logout) {
    return <Redirect to='/' />
  }

  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} position="static">
        <Toolbar>
          <div className={classes.title}>
            <img src={Logo} alt="Logo" className={classes.logo}/>
          </div>
          <Typography>
            {name && surname ? `${name} ${surname}` : 'Ghest'}
          </Typography>
          <div>
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
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

MenuAppBar.propTypes = {
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired
}

export { MenuAppBar }