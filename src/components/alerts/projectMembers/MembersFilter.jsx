import React, { useState } from 'react'
import { TextField } from '@material-ui/core'
import { Autocomplete } from '@material-ui/lab'
import PropTypes from 'prop-types'
import { useStyles } from './styles'

const MembersFilter = ({members, onMemberSelected}) => {
  const classes = useStyles()

  // const [value, setValue] = useState(undefined)

  return (
    <Autocomplete
      className={classes.autocomplete}
      onChange={onMemberSelected}
      id='members-filter'
      options={members}
      getOptionLabel={(option) => option.id}
      renderInput={(params) => <TextField {...params} label="Search Users" variant="outlined" />}
    />
  )
}

MembersFilter.propTypes = {
  members: PropTypes.array.isRequired,
  onMemberSelected: PropTypes.func.isRequired
}

export { MembersFilter }