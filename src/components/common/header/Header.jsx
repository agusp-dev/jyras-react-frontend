import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Typography } from '@material-ui/core'
import { useStyles } from './styles'

const Header = ({title}) => {
  const classes = useStyles()
  return (
    <Grid item className={classes.root} sm={12} md={4} >
      <Typography className={classes.title}>
        {title}
      </Typography>
    </Grid>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export { Header }