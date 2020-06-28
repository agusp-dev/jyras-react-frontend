import React, { useCallback, useState, useEffect } from 'react'
import { Copyright } from '../../components'
import Logo from '../../assets/logo/logo.svg'
import { Button, CssBaseline, TextField, FormControlLabel, Checkbox, Link, Paper, Box, Grid } from '@material-ui/core'
import { useStyles } from './styles'
import { userService } from '../../service'
import { Redirect } from 'react-router'
import { useHistory } from 'react-router-dom'

const Signin = () => {

  const history = useHistory()

  const classes = useStyles()

  // const [isLogged, setLoggedIn] = useState(false)

  // useEffect(() => {
  //   // console.log('signin useEffect', isLogged)
  //   // if (isLogged) {
  //   //   redirect()
  //   // }
  // })

  const onSigninCallback = result => {
    const { type, user, msg } = result
    if (type === 0) {
      localStorage.setItem('user', user)
      console.log('asdfasdfasdfasfdasfdasfasdfdas')
      // setLoggedIn(true)
      // history.push('/')
      // redirect()
      // console.log('setLoggedIn')
    } else {
      alert( msg )
    }
  }

  const handleLogin = useCallback(
    async event => {
      event.preventDefault()
      const { email, password } = event.target.elements
      try {
        await userService.firebaseLogin(email.value, password.value, onSigninCallback)
      } catch (error) {
        alert(error)
      }
    }
  )

  // useHistory().push('/')
  //check if user is logged and redirect
  // const user = localStorage.getItem('user')

  // if (isLogged) {
  //   return <Redirect to={'/'} />
  // }

  return (
    <div>
      {console.log('signin render')}
      <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <img src={Logo} alt="App logo"/>
          <form className={classes.form} noValidate onSubmit={handleLogin}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
    </div>
    
  )
}

export { Signin }