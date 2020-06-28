import React, { useCallback } from 'react'
import { userService } from '../../service' 
 
const Projects = () => {

  const handleLogout = useCallback(
    async event => {
      event.preventDefault()
      await userService.firebaseLogout()
      localStorage.removeItem('user')
    }
  )

  return (
    <div>
      <h1>Projects</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export { Projects }