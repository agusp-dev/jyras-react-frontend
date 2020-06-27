import React, { Component } from 'react'
import firebaseApp from '../../utils/firebaseApp'
 
class Projects extends Component {

  onLogout = e => {
    e.preventDefault()
    console.log('onLogout')
    firebaseApp.auth().signOut()
  }

  render() {
    console.log('Projects render')
    return (
      <div>
        <h1>Projects</h1>
        <button onClick={this.onLogout}>Logout</button>
      </div>
    )
  }
}

export { Projects }