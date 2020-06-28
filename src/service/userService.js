import firebaseApp from '../utils/firebaseApp'

const firebaseLogin = (user, pass, callback) => {
  console.log('firebaseLogin', user, pass)
  firebaseApp.auth().signInWithEmailAndPassword(user, pass)
    .then(result => {
      /**
       * result:
       * {additionalUserInfo:{...}, credential:null, operationType:'signIn', user:{...} }
       */
      console.log('firebaseLogin result', result)
      callback({ type: 0, user: result.user, msg: null })
    })
    .catch(error => {
      /**
       * error:
       * {a:null, code:string, message:string}
       */
      console.log('firebaseLogin error', error)
      callback({ type: 1, user: null, msg: error.message })
    })
}

const firebaseLogout = () => {
  console.log('firebaseLogout')
  firebaseApp.auth().signOut()
}

export const userService = {
  firebaseLogin,
  firebaseLogout
}