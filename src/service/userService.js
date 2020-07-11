import { firebaseApp } from '../utils'

const getUserData = (user, callback) => {
  const { email } = user
  const dRef = firebaseApp.db().collection('users').doc(email)
  dRef.get()
    .then(doc => {
      if (doc.exists) {
        callback({
          type: 0,
          loggedUser: {
            ...user,
            ...doc.data()
          },
          msg: null
        })
      }
    })
    .catch(error => {
      callback({
        type: 1,
        userData: null,
        msg: error.message
      })
    })
}

const getAllUsers = (callback) => {
  const dRef = firebaseApp.db().collection('users')
  const users = []
  dRef
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach( u => {
        users.push({
          email: u.id,
          ...u.data()
        })
      })
      callback({
        type: 0,
        users,
        msg: null
      })
    })
    .catch(error => {
      callback({
        type: 1,
        users: null,
        msg: error.message
      })
    })
}

export const userService = {
  getUserData,
  getAllUsers
}

