import React, { useState, useEffect } from 'react'
import { useStyles } from './styles'
import { projectsService } from '../../service'
import { ProjectCard } from './ProjectCard'
import { AddButton } from './AddButton'
import { Grid, Typography } from '@material-ui/core'
import { Redirect } from 'react-router'

const ProjectList = () => {

  const classes = useStyles()
  const [selectedProject, navigateToSelectedProject] = useState(undefined)
  
  const [projects, setProjects] = useState(undefined)
  useEffect(() => {
    getProjects()
  }, [])

  const getProjects = async () => {
    const email = getUserEmail()
    try {
      await projectsService.getProjectsData(email, onGetProjects)
    } catch(error) {
      alert(error.message)
    }
  }

  const getUserEmail = () => {
    const user = JSON.parse(localStorage.getItem('user'))
    return user.email
  }

  const onGetProjects = result => {
    const { type, projects, error } = result
    if (type === 0) {
      setProjects(projects)
    } else {
      alert(error)
    }
  }

  const onSelectedProject = id => {
    //todo
    
    // const sProject = projects.find( s => s.id === id )
    // if (!sProject) return
    // goToSelectedProject(sProject)
  }

  const goToSelectedProject = project => {
    navigateToSelectedProject(project)
  }

  if (selectedProject) {
    return (
      <Redirect push to={{
        pathname: '/project',
        state: {
          id: selectedProject.id,
          name: selectedProject.name,
          description: selectedProject.description,
          tasks: selectedProject.tasks,
          members: selectedProject.members
        }
      }} />
    )
  }

  return (
    <Grid container>
      {console.log('projectList render')}
      <Grid xs={12} item>
        <Grid container justify='flex-start' spacing={3}>
          {projects && projects.length > 0 ? (
            projects.map(p => {
              return (
                <Grid key={p.id} item={true} xs={12} sm={3}>  
                  <ProjectCard 
                    id={p.id}
                    name={p.name}
                    description={p.description}
                    tasks={p.tasks}
                    members={p.members}
                    onSelectedProject={onSelectedProject} />  
                </Grid>
              )
            })
          ) : (<Typography>
                No Projects yet. Please, add one.
              </Typography>)}
        </Grid>
      </Grid>
      <AddButton />
    </Grid>
  )
}

export { ProjectList }