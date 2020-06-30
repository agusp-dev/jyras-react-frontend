import React from 'react'
import { Header } from '../'
import { ProjectList } from './ProjectList'

const Projects = () => {

  return (
    <div>
      <Header title='Projects'/>
      <ProjectList />
    </div>
  )
}

export { Projects }