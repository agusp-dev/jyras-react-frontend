import React from 'react'
import { Projects as CProjects } from '../../components'
import { useStyles } from '../styles'

const Projects = () => {
  const classes = useStyles()
  return (
    <div className={classes.root} >
      <CProjects />
    </div>
  )
}

export { Projects }