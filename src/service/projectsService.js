import { firebaseApp } from '../utils'

const getProjectsData = (email, callback) => {
  const dRef = firebaseApp.db().collection('projects')
  dRef
		.where('email', '==', email)
    .get()
    .then(querySnapshot => {
      const projects = []
      querySnapshot.forEach( doc => {
				const { name, description, email } = doc.data()
        projects.push({
          id: doc.id,
					name,
					description,
					email
        })
			})
      callback({
        type: 0,
        projects,
        msg: null
      })
    })
    .catch(error => {
      callback({
        type: 1,
        projects: null,
        msg: error.message
      })
    })
}

const saveNewProject = (project, callback) => {
  const dRef = firebaseApp.db().collection('projects')
  dRef
    .add(project)
    .then(docRef => {
      callback({
        type: 0,
        project: {
          id: docRef.id,
          ...project
        },
        msg: null
      })
    })
    .catch(error => {
      callback({
        type: 1,
        project: null,
        msg: error.message
      })
    })
}

export const projectsService = {
  getProjectsData,
  saveNewProject
}