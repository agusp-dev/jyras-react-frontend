import React, { useState, useEffect } from 'react'
import { SelectedProjectTasksContainer } from './SelectedProjectTasksContainer'
import { AddProject } from '../alerts/addProject/AddProject'
import { ProjectMembers } from '../alerts/projectMembers/ProjectMembers'
import { useStyles } from './styles'
import { Header } from './Header'
import { Redirect } from 'react-router'
import { projectsService } from '../../service'
import { useRadioGroup } from '@material-ui/core'
import { userService } from '../../service'

const SelectedProject = props => {

  const classes = useStyles()

  const [openEditAlert, setEditAlert] = useState(false)
	const [openMembersAlert, setMembersAlert] = useState(false)
	//selected user in members alert
	const [selectedUser, setSelectedUser] = useState(undefined)
	//filter users in members alert
	const [filterUsers, setFilterUsers] = useState(undefined)
	

	//get all users to add to filter
	const onGetAllUsers = result => {
		const { type, msg } = result
		let { users } = result
    if (type !== 0) {
      alert(msg)
      return
		}

		//remove project members in array
		const { members } = selectedProject
		if (users.length > 0 && members.length > 0) {
			users = users.filter( u => {
				return !members.some( m => m.email === u.email )
			})
		}
		
		setFilterUsers(users)
	}
	
	const getUsers = async () => {
		try {
			await userService.getAllUsers(onGetAllUsers)
		} catch(error) {
			alert(error)
		}
	}
	useEffect(() => {
		getUsers()
	}, [])

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
	
	//onAdd project member
	const onAddProjectMember = async member => {
		if (!selectedProject || !member) return
		try {
			await projectsService.saveProjectMember(selectedProject.id, member, onProjectMemberCallback)
		} catch (error) {
			alert(error)
		}
	}

	const onProjectMemberCallback = result => {
		const { type, member, msg } = result
		if (type === 0) {
			const { members } = selectedProject
      members.push(member)
			setSelectedUser(undefined)
			setSelectedProject( prevState => ({
				...prevState,
				members
      }))
      getUsers()
		} else {
			alert(msg)
		}
	}


  return (
    <div>
      {selectedProject && (
        <div>
          <Header 
            title={selectedProject.name}
            description={selectedProject.description}
            members={selectedProject.members}
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
							projectId={selectedProject.id}
              open={openMembersAlert}
              handleClose={() => setMembersAlert(false)}
							members={selectedProject.members}
							filterUsers={filterUsers}
							selectedUser={selectedUser}
							setSelectedUser={user => setSelectedUser(user)}
							onAddMember={onAddProjectMember}/>
          )}
        </div>
      )}
    </div>
  )
}

export { SelectedProject }