import React from 'react'
import { useStyles } from './styles'
import { ProjectCard } from './ProjectCard'
import { AddButton } from './AddButton'
import { Grid } from '@material-ui/core'

const projects = [
  { 
    id: 1, 
    name: 'Project 1', 
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    tasks: {},
    members: {}
  },
  {
    id: 2, 
    name: 'Project 2', 
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    tasks: {},
    members: {}
  },
  {
    id: 3, 
    name: 'Project 3', 
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    tasks: {},
    members: {}
  },
  {
    id: 4, 
    name: 'Project 4', 
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    tasks: {},
    members: {}
  },
  { 
    id: 5, 
    name: 'Project 5', 
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    tasks: {},
    members: {}
  },
  {
    id: 6, 
    name: 'Project 6', 
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    tasks: {},
    members: {}
  },
  {
    id: 7, 
    name: 'Project 7', 
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    tasks: {},
    members: {}
  },
  {
    id: 8, 
    name: 'Project 8', 
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    tasks: {},
    members: {}
  }
]

const ProjectList = () => {

  const classes = useStyles()

  return (
    <Grid container>
      <Grid xs={12} item>
        <Grid container justify='flex-start' spacing={3}>
          {projects.map(p => {
            return (
              <Grid key={p.id} item={true} xs={12} sm={3}>  
                <ProjectCard 
                  id={p.id}
                  name={p.name}
                  description={p.description}
                  tasks={p.tasks}
                  members={p.members} />  
              </Grid>
            )
          })}
        </Grid>
      </Grid>
      <AddButton />
    </Grid>
  )
}

export { ProjectList }