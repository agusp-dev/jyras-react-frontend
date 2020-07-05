import React, { useState, useEffect } from 'react'
import { useStyles } from './styles'
import { projectsService } from '../../service'
import { ProjectCard } from './ProjectCard'
import { AddProject } from '../alerts/addProject/AddProject'
import { AddButton } from '../common/addButton/AddButton'
import { Grid, Typography, CircularProgress } from '@material-ui/core'
import { Redirect } from 'react-router'


const ProjectList = () => {

  const classes = useStyles()
  const [showProgress, setProgress] = useState(false)
  const [openAddProjectModal, setOpenAddProjectModal] = useState(false)
  const [selectedProject, setSelectedProject] = useState(undefined)
  
  const [projects, setProjects] = useState(undefined)
  useEffect(() => {
    getProjects()
  }, [])

  const getProjects = async () => {
    setProgress(true)
    const email = getUserEmail()
    try {
      await projectsService.getProjectsData(email, onGetProjects)
    } catch(error) {
      alert(error.message)
      setProgress(false)
    }
  }

  const getUserEmail = () => {
    const user = JSON.parse(localStorage.getItem('user'))
    return user.email
  }

  const onGetProjects = result => {
    const { type, projects, msg } = result
    if (type === 0) {
      setProjects(projects)
    } else {
      alert(msg)
    }
    setProgress(false)
  }

  const onSelectedProject = ( id, name, description ) => {    
    goToSelectedProject({id, name, description})
  }

  const goToSelectedProject = project => {
    setSelectedProject(project)
  }

  const handleClickAddProject = () => {
    setOpenAddProjectModal(true)
  }

  const handleSaveNewProject = async e => {
    e.preventDefault()
    const name = e.target.name.value
    const description = e.target.description.value
    const userEmail = getUserEmail()
    const newProject = {
      name, 
      description,
      tasks: [],
      members: [],
      email: userEmail
    }
    try {
      await projectsService.saveNewProject(newProject, onProjectSavedCallback)
    } catch(error) {
      alert(error)
    }
    setOpenAddProjectModal(false)
  }

  const onProjectSavedCallback = result => {
    const { type, project, msg } = result
    if (type === 0) {
      setProjects([
        ...projects,
        project
      ])
    } else {
      alert(msg)
    }
  }

  if (selectedProject) {
    return (
      <Redirect push to={{
        pathname: '/project',
        state: {...selectedProject}
      }} />
    )
  }

  return (
    <Grid container>

      <Grid xs={12} item>
        {showProgress ? (
          <div className={classes.progressContainer}>
            <CircularProgress className={classes.progress}/>
          </div>
        ) : (
          <Grid container justify='flex-start' spacing={3}>
            {projects && projects.length > 0 ? (
              projects.map(p => {
                return (
                  <Grid key={p.id} item={true} xs={12} sm={3}>  
                    <ProjectCard 
                      id={p.id}
                      name={p.name}
                      description={p.description}
                      onSelectedProject={onSelectedProject} />  
                  </Grid>
                )
              })
            ) : (<Typography>
                  No Projects yet. Please, add one.
                </Typography>)}
          </Grid>
        )}
      </Grid>

      <AddButton handleClickCallback={handleClickAddProject}/>
      {openAddProjectModal && (
        <AddProject 
          open={openAddProjectModal} 
          handleClose={() => setOpenAddProjectModal(false)}
          handleSaveNewProject={handleSaveNewProject}
        />
      )}
      
    </Grid>
  )
}

export { ProjectList }