import { firebaseApp } from '../utils'

const getProjectsData = (email, callback) => {
  const dRef = firebaseApp.db().collection('projects')
  dRef
    .where('email', '==', email)
    .get()
    .then(querySnapshot => {
      const projects = []
      querySnapshot.forEach( doc => {
        projects.push({
          id: doc.id,
          ...doc.data()
        })
      })
      callback({
        type: 0,
        projects,
        error: null
      })
    })
    .catch(error => {
      callback({
        type: 1,
        projects: null,
        error: error.message
      })
    })
}

export const projectsService = {
  getProjectsData
}