import { firebaseApp } from '../utils'

const getTasksData = (projectId, callback) => {
	console.log(projectId)
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

export const tasksService = {
	getTasksData
}