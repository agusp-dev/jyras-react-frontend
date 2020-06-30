import React from 'react'
import { Header } from '../'
import { ProjectList } from './ProjectList'

const Projects = () => {

  return (
    <div>
      <Header 
        title='Projects'
        backButton={false} />
      <ProjectList />
    </div>
  )
}

export { Projects }