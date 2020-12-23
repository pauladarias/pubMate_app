import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyDZziNUq8Uc1PcEdfU6LXaKgKs4d9mMQMc",
  authDomain: "paula-e488a.firebaseapp.com",
  projectId: "paula-e488a",
  storageBucket: "paula-e488a.appspot.com",
  messagingSenderId: "743211129031",
  appId: "1:743211129031:web:9ae019e5252f7b399f06e2",
  measurementId: "G-3RV0QPG3BT"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider() 

export { auth, provider }
export default db 

