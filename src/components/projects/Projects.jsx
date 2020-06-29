import React, { useCallback, useState } from 'react'
import { userService } from '../../service' 
import { Redirect } from 'react-router-dom'
 
const Projects = () => {

  const [logout, setLogout] = useState(false)

  const handleLogout = useCallback(
    async event => {
      event.preventDefault()
      await userService.firebaseLogout()
      localStorage.removeItem('user')
      setLogout(true)
    }
  )

  if (logout) {
    return <Redirect to='/' />
  }

  return (
    <div>
      <h1>Projects</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export { Projects }