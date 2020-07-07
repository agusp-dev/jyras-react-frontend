import React from 'react'
import PropTypes from 'prop-types'
import { Fab } from '@material-ui/core'
import { Add } from '@material-ui/icons'
import { useStyles } from './styles'

const AddMemberButton = ({handleClickCallback}) => {
  const classes = useStyles()

  return (
    <Fab 
      className={classes.addMemberButton}
      title='New Member'
      onClick={handleClickCallback}
    >
      <Add />
    </Fab>
  )
}

AddMemberButton.propTypes = {
  handleClickCallback: PropTypes.func.isRequired
}

export { AddMemberButton }