import { firebaseApp } from '../utils'

const firebaseLogin = (user, pass, callback) => {
  firebaseApp.app.auth().signInWithEmailAndPassword(user, pass)
    .then(result => {
      /**
       * result:
       * {additionalUserInfo:{...}, credential:null, operationType:'signIn', user:{...} }
       */
      // console.log('firebaseLogin result', result, firebaseApp.auth().currentUser)
      const { user } = result
      callback({ 
        type: 0, 
        loggedUser: {
          email: user.email,
          refreshToken: user.refreshToken
        }, 
        msg: null 
      })
    })
    .catch(error => {
      /**
       * error:
       * {a:null, code:string, message:string}
       */
      // console.log('firebaseLogin error', error)
      callback({ type: 1, loggedUser: null, msg: error.message })
    })
}

const firebaseLogout = () => {
  firebaseApp.app.auth().signOut()
}

export const userAuthService = {
  firebaseLogin,
  firebaseLogout
}