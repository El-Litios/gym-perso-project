import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTkQ9-t_WqZcYMK3M1rqDDPGFV1Aq1WvE",
  authDomain: "gym-project-students.firebaseapp.com",
  projectId: "gym-project-students",
  storageBucket: "gym-project-students.appspot.com",
  messagingSenderId: "885186142334",
  appId: "1:885186142334:web:499420b674cef38e2a782f"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

// Initialize DB
const db = firebase.firestore()
const authen = firebase.auth()

export {db, authen}