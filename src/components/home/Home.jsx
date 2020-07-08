import React from 'react'
import { Header } from '../'
import HomeImage from '../../assets/home/home4.png'
import { Grid, Typography } from '@material-ui/core'
import { useStyles } from './styles'

const Home = () => {
  const classes = useStyles()
  return (
    <div>
      <Header
        title='Home'
        backButton={false} />

      <Grid container className={classes.root}>
        <Grid item>
          <img src={HomeImage} alt="Home img" className={classes.image}/>
          <Typography className={classes.text}>
            This is your Home
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
}

export { Home }