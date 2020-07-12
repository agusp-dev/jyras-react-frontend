import React from 'react'
import PropTypes from 'prop-types'
import { Avatar , IconButton, Typography, Grid} from '@material-ui/core'
import { Edit } from '@material-ui/icons'
import { AvatarGroup } from '@material-ui/lab'
import { useStyles } from './styles'

const HeaderMembers = ({members, onHandleMembersEdit}) => {
  const classes = useStyles()

  return (
    <Grid container direction='row' className={classes.headerMembers}>
      {members && members.length > 0 ? (
        <AvatarGroup max={6}>
          {members.map(m => {
            return <Avatar key={m.email} alt={`${m.name} ${m.surname}`} src='no' />
        })}
      </AvatarGroup>
      ) : (
        <Typography color='textSecondary' component='p'>
          No Members
        </Typography>
      )}
      
      <IconButton className={classes.editButton} aria-label='edit' onClick={onHandleMembersEdit} >
        <Edit />
      </IconButton>
    </Grid>
  )
}

HeaderMembers.propTypes = {
  members: PropTypes.array.isRequired,
  onHandleMembersEdit: PropTypes.func.isRequired
}

export { HeaderMembers }
