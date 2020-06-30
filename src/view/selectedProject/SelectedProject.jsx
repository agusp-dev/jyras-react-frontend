import React from 'react'
import { SelectedProject as CSelectedProject } from '../../components'
import { useStyles } from '../styles'

const SelectedProject = props => {
  const classes = useStyles()
  
  return (
    <div className={classes.root}>
      <CSelectedProject {...props}/>
    </div>
  )
}

export { SelectedProject }