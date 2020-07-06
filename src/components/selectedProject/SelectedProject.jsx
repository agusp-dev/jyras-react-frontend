import React, { useState } from 'react'
import { SelectedProjectTasksContainer } from './SelectedProjectTasksContainer'
import { AddProject } from '../alerts/addProject/AddProject'
import { ProjectMembers } from '../alerts/projectMembers/ProjectMembers'
import { useStyles } from './styles'
import { Header } from './Header'
import { Redirect } from 'react-router'
import { projectsService } from '../../service'

const SelectedProject = props => {

  const classes = useStyles()

  //test members
  let members = [
    {
      id: '11111',
      name: 'Agustin',
      surname: 'Perez',
      email: 'perezp.agustin@gmail.com'
    },
    {
      id: '22222',
      name: 'Nicolas',
      surname: 'Monetto',
      email: 'nmonetto@gmail.com'
    },
    {
      id: '3333333',
      name: 'Martin',
      surname: 'Diaz',
      email: 'mdiaz@gmail.com'
    },
    {
      id: '444444',
      name: 'Cristina',
      surname: 'Kirchner',
      email: 'cristinita@gmail.com'
    },
    {
      id: '555555',
      name: 'Mauricio',
      surname: 'Macri',
      email: 'mcat@gmail.com'
    }
  ]
  
  const [openEditAlert, setEditAlert] = useState(false)
  const [openMembersAlert, setMembersAlert] = useState(false)
	
	const returnToIndex = () => {
		return <Redirect to='/'/> 
	}

  /**
   * Avoid manual routing
   */
  if (props.location && props.location.state) returnToIndex()
	const { project } = props.location.state
  if (!project) returnToIndex()

  
  const [selectedProject, setSelectedProject] = useState(project)


  const onBackButtonClick = () => {
    if (props.history) {
      props.history.goBack()
    }
  }

  const onHandleEditButtonClick = () => {
    setEditAlert(true)
  }

  const onHandleSave = e => {
    e.preventDefault()
    const name = e.target.name.value
    const description = e.target.description.value
    updateProject(selectedProject.id, {name, description})
    setEditAlert(false)
  }

  const updateProject = async (id, project) => {
    try {
      await projectsService.updateProject(id, project, onProjectUpdatedCallback)
    } catch(error) {
      alert(error)
    }
  }

  const onProjectUpdatedCallback = result => {
    const { type, project, msg } = result
    if (type === 0) {
      //Update current project name and description
      setSelectedProject({
        id: selectedProject.id, 
        name: project.name, 
        description: project.description
      })
    } else {
      alert(msg)
    }
  }

  //members edit button
  const onHandleMembersEditButtonClick = () => {
    setMembersAlert(true)
  }

  return (
    <div>
      {selectedProject && (
        <div>
          <Header 
            title={selectedProject ? selectedProject.name : ''}
            description={selectedProject ? selectedProject.description : ''}
            members={members || []}
            backAction={onBackButtonClick}
            handleEditClick={onHandleEditButtonClick}
            handleMembersEdit={onHandleMembersEditButtonClick}
          />
          <SelectedProjectTasksContainer projectId={selectedProject.id} />
          {openEditAlert && (
            <AddProject 
              project={selectedProject}
              open={openEditAlert} 
              handleClose={() => setEditAlert(false)}
              handleSave={onHandleSave}
            />
          )}
          {openMembersAlert && (
            <ProjectMembers
              open={openMembersAlert}
              handleClose={() => setMembersAlert(false)}
              members={members}/>
          )}
        </div>
      )}
    </div>
  )
}

export { SelectedProject }