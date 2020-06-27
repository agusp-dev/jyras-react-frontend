import React, { useCallback, useContext } from 'react'
import { withRouter, Redirect } from 'react-router'
import firebaseApp from '../../utils/firebaseApp'
import { AuthContext } from '../../utils/Auth'
import { Copyright } from '../../components'
import Logo from '../../assets/logo/logo.svg'
import { Button, CssBaseline, TextField, FormControlLabel, Checkbox, Link, Paper, Box, Grid } from '@material-ui/core'
import { useStyles } from './styles'

const Signin = ({ history }) => {
  const classes = useStyles()

  const handleLogin = useCallback(

    async event => {
      event.preventDefault()
      const { email, password } = event.target.elements
      try {
        await firebaseApp.auth().signInWithEmailAndPassword(email.value, password.value)
        history.push('/')
      } catch (error) {
        alert(error)
      }
    },
    [history]
  )

  const { currentUser } = useContext(AuthContext)
  if (currentUser) {
    return <Redirect to='/' />
  }


  return (
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
  )
}

export default withRouter(Signin)