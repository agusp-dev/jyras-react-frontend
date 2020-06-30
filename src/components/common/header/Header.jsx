import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Typography } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import { useStyles } from './styles'

const Header = ({title, backButton, backAction}) => {
  const classes = useStyles()
  return (
    <Grid item className={classes.root} sm={12} md={4} >
      <Typography className={classes.title}>
        {backButton && (
          <ArrowBackIcon onClick={backAction}/>
        )}
        {title}
      </Typography>
    </Grid>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  backButton: PropTypes.bool.isRequired
}

export { Header }