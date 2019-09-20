// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyAUsSHGZ3LabYNchpn3mrCGd1hmzraTqus",
  authDomain: "gcse-revision-site.firebaseapp.com",
  databaseURL: "https://gcse-revision-site.firebaseio.com",
  projectId: "gcse-revision-site",
  storageBucket: "",
  messagingSenderId: "362657041117",
  appId: "1:362657041117:web:0a4feb1735a34648166934",
}

let Firebase

// Initialize Firebase
if (!firebase.apps.length) {
  try {
    Firebase = firebase.initializeApp(firebaseConfig)
  } catch (err) {
    console.error("Firebase initialization error raised", err.stack)
  }
}

export default Firebase
