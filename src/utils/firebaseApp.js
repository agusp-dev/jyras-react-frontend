import * as firebase from 'firebase/app'
import 'firebase/auth'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDtPx38OQjNCnNceX3i4pTCyGaVLJdUM5U",
  authDomain: "jyras-a0151.firebaseapp.com",
  databaseURL: "https://jyras-a0151.firebaseio.com",
  projectId: "jyras-a0151",
  storageBucket: "jyras-a0151.appspot.com",
  messagingSenderId: "310996952994",
  appId: "1:310996952994:web:5652cf4beb4a99dac274fb"
})

export default firebaseApp