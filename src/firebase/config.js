import * as firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCTfx2H_BezQLxUo6UbhhcX47fv5l-mqfE",
  authDomain: "firegram-a7042.firebaseapp.com",
  databaseURL: "https://firegram-a7042.firebaseio.com",
  projectId: "firegram-a7042",
  storageBucket: "firegram-a7042.appspot.com",
  messagingSenderId: "579303698084",
  appId: "1:579303698084:web:82eae8d375f22a91698031"
}

firebase.initializeApp(firebaseConfig)

const projectStorage = firebase.storage()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectStorage, timestamp }