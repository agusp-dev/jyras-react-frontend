import { firebaseApp } from '../utils'

const getTasksData = (projectId, callback) => {
	const dRef = firebaseApp.db().collection('tasks')
	dRef
		.where('projectId', '==', projectId)
		.get()
		.then(querySnapshop => {
			const tasks = []
			querySnapshop.forEach(doc => {
				tasks.push({
					id: doc.id,
					...doc.data()
				})
			})
			callback({
				type: 0,
				tasks,
				msg: null
			})
		})
		.catch(error => {
			callback({
				type: 1,
				tasks: null,
				msg: error.message
			})
		})
}

const saveNewTask = (task, callback) => {
  const dRef = firebaseApp.db().collection('tasks')
  dRef
    .add(task)
    .then(docRef => {
      callback(
        true, {
          type: 0,
          task: {
            id: docRef.id,
            ...task
          },
          msg: null
        }
      )
    })
    .catch(error => {
      callback({
        type: 1,
        task: null,
        msg: error.message
      })
    })
}

const updateTask = (id, task, callback) => {
  const dRef = firebaseApp.db().collection('tasks').doc(id)
  dRef
    .set(task)
    .then(() => {
      callback(
        false, {
          type: 0,
          task: {
            id,
            ...task
          },
          msg: null
        }
      )
    })
    .catch(error => {
      callback({
        type: 1,
        task: null,
        msg: error.message
      })
    })
}

export const tasksService = {
  getTasksData,
  saveNewTask,
  updateTask
}