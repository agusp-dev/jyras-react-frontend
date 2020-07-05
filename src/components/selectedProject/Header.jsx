import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Typography, IconButton } from '@material-ui/core'
import { Edit } from '@material-ui/icons'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import { useStyles } from './styles'

const Header = ({title, description, backAction, handleEditClick}) => {
  const classes = useStyles()
  return (
    <Grid item className={classes.header} >
      <Typography className={classes.headerTitle} component='p'>
        <ArrowBackIcon onClick={backAction}/>
        {title}
        <IconButton className={classes.editButton} aria-label='edit' onClick={handleEditClick} >
          <Edit />
        </IconButton>
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
  backAction: PropTypes.func.isRequired,
  handleEditClick: PropTypes.func.isRequired
}

export { Header }