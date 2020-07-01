import React from 'react'
import PropTypes from 'prop-types'
import { Fab } from '@material-ui/core'
import { Add } from '@material-ui/icons'
import { useStyles } from './styles'
 
const AddButton = ({handleClickAddProject}) => {
  
  const classes = useStyles()

  return (
    <Fab
      className={classes.AddButton}
      title='New Project'
      onClick={handleClickAddProject}
    >
      <Add />
    </Fab>
  )
}

AddButton.propTypes = {
  handleClickAddProject: PropTypes.func.isRequired
}

export { AddButton }