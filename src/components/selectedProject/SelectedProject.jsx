import React from 'react'
import { SelectedProjectTasksContainer } from './SelectedProjectTasksContainer'
import { useStyles } from './styles'
import { Header } from './Header'
import { Redirect } from 'react-router'
import PropTypes from 'prop-types'

const SelectedProject = props => {

	const classes = useStyles()
	
	const returnToIndex = () => {
		return <Redirect to='/'/> 
	}

  /**
   * Avoid manual routing
   */
  if (props.location && props.location.state) returnToIndex()
	const { id, name, description } = props.location.state
	if (!id || !name) returnToIndex()

  const onBackButtonClick = () => {
    if (props.history) {
      props.history.goBack()
    }
  }

  return (
    <div>
      <Header 
        title={name || 'No Title'}
        description={description || 'No Description'}
        backButton={true}
        backAction={onBackButtonClick} 
      />
      <SelectedProjectTasksContainer projectId={id} />
    </div>
  )
}

export { SelectedProject }