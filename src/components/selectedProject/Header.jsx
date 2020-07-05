import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Typography } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import { useStyles } from './styles'

const Header = ({title, description, backButton, backAction}) => {
  const classes = useStyles()
  return (
    <Grid item className={classes.header} sm={12} md={4} >
      <Typography className={classes.headerTitle}>
        {backButton && (
          <ArrowBackIcon onClick={backAction}/>
        )}
        {title}
      </Typography>
      <Typography className={classes.headerDescription} color='textSecondary' component='p'>
        {description}
      </Typography>
    </Grid>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  backButton: PropTypes.bool.isRequired
}

export { Header }