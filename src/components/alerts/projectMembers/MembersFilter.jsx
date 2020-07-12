import React, { useState } from 'react'
import { TextField } from '@material-ui/core'
import { Autocomplete } from '@material-ui/lab'
import PropTypes from 'prop-types'
import { useStyles } from './styles'

const MembersFilter = ({members, selectedMember, onMemberSelected}) => {
  const classes = useStyles()

  return (
    <Autocomplete
			className={classes.autocomplete}
			inputValue={selectedMember ? selectedMember.email : ''}
			// value={selectedMember || ''}
      onChange={onMemberSelected}
			id='members-filter'
      options={members}
      getOptionLabel={option => option.email}
      getOptionSelected={(o, v) => o.value === v.value}
      renderInput={
        (params) => 
          <TextField 
            {...params} 
            label="Search Users" 
            variant="outlined" 
            inputProps={{...params.inputProps}}
          />
      }
    />
  )
}

MembersFilter.propTypes = {
  members: PropTypes.array.isRequired,
  onMemberSelected: PropTypes.func.isRequired
}

export { MembersFilter }