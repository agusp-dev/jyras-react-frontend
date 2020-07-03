import React from 'react'
import PropTypes from 'prop-types'
import { Fab } from '@material-ui/core'
import { Add } from '@material-ui/icons'
import { useStyles } from './styles'
 
const AddButton = ({handleClickCallback}) => {
  
  const classes = useStyles()

  return (
    <Fab
      className={classes.root}
      title='New Project'
      onClick={handleClickCallback}
    >
      <Add />
    </Fab>
  )
}

AddButton.propTypes = {
  handleClickCallback: PropTypes.func.isRequired
}

export { AddButton }