import React from 'react'
import PropTypes from 'prop-types'
import { Avatar , IconButton} from '@material-ui/core'
import { Edit } from '@material-ui/icons'
import { AvatarGroup } from '@material-ui/lab'
import { useStyles } from './styles'

const HeaderMembers = ({members, onHandleMembersEdit}) => {
  const classes = useStyles()

  return (
    <div className={classes.headerMembers}>
      <AvatarGroup max={6}>
        {members.map(m => {
          return <Avatar key={m.id} alt={`${m.name} ${m.surname}`} src='no' />
        })}
      </AvatarGroup>
      <IconButton className={classes.editButton} aria-label='edit' onClick={onHandleMembersEdit} >
        <Edit />
      </IconButton>
    </div>
  )
}

HeaderMembers.propTypes = {
  members: PropTypes.array.isRequired,
  onHandleMembersEdit: PropTypes.func.isRequired
}

export { HeaderMembers }