import React from 'react'
import { Fab } from '@material-ui/core'
import { Add } from '@material-ui/icons'
import { useStyles } from './styles'
 
const AddButton = () => {
  
  const classes = useStyles()

  return (
    <Fab
      className={classes.AddButton}
      title='New Project'
    >
      <Add />
    </Fab>
  )
}

export { AddButton }