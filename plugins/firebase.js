import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/database'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDn3_LnvVQ1icKvYtvoyIXD_X7Ik9Lyruw',
  authDomain: 'menuapp-1cb58.firebaseapp.com',
  databaseURL: 'https://menuapp-1cb58.firebaseio.com',
  projectId: 'menuapp-1cb58',
  storageBucket: 'menuapp-1cb58.appspot.com',
  messagingSenderId: '349364600107',
  appId: '1:349364600107:web:94b90dadf5838f4852596e'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

// eslint-disable-next-line no-unused-vars
let app = null
if (!firebase.apps.length) {
  app = firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth()
export const DB = firebase.database()
export const StoreDB = firebase.firestore()
export default firebase
