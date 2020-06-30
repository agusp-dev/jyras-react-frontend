import React from 'react'
import { SelectedProjectTasksContainer } from './SelectedProjectTasksContainer'
import { useStyles } from './styles'
import { Header } from '../'
import { Redirect } from 'react-router'

const SelectedProject = props => {

  const classes = useStyles()

  /**
   * Avoid manual routing
   */
  let sProject
  if (props.location && props.location.state) {
    sProject = Object.assign({}, props.location.state)
  }
  if (!sProject) {
    return <Redirect to='/'/>
  }

  const onReturn = () => {
    if (props.history) {
      props.history.goBack()
    }
  }

  const { id, name, description, tasks, members } = sProject

  return (
    <div>
      <Header 
        title={name || 'No Title'}
        backButton={true}
        backAction={onReturn} 
      />
      <SelectedProjectTasksContainer />
    </div>
  )
}

export { SelectedProject }