import React from 'react'
import { HeaderMembers } from './HeaderMembers'
import PropTypes from 'prop-types'
import { Grid, Typography, IconButton } from '@material-ui/core'
import { Edit } from '@material-ui/icons'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import { useStyles } from './styles'

const Header = ({title, description, members, backAction, handleEditClick, handleMembersEdit}) => {
  const classes = useStyles()

  return (
    <Grid item className={classes.header} >
      <Grid container >
        <Grid item xs={5}>
          <Typography className={classes.headerTitle} component='p'>
            <ArrowBackIcon onClick={backAction}/>
            {title}
            <IconButton className={classes.editButton} aria-label='edit' onClick={handleEditClick} >
              <Edit />
            </IconButton>
          </Typography>
        </Grid>
        <Grid item xs={5}>
          <HeaderMembers 
            members={members}
            onHandleMembersEdit={handleMembersEdit}/>
        </Grid>
        <Grid item xs>
          REMOVE
        </Grid>
      </Grid>
      <Typography className={classes.headerDescription} color='textSecondary' component='p'>
        {description}
      </Typography>
    </Grid>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  members: PropTypes.array.isRequired,
  backAction: PropTypes.func.isRequired,
  handleEditClick: PropTypes.func.isRequired,
  handleMembersEdit: PropTypes.func.isRequired
}

export { Header }