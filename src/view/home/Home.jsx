import React from 'react'
import { useStyles } from '../styles'
import { Home as CHome } from '../../components'

const Home = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <CHome />
    </div>
  )
}

export { Home }