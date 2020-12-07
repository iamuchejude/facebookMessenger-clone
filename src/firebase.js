import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  apiKey: "AIzaSyC8GnQKi6Yo1rAecozeK9CIUDHBUjyvujE",
  authDomain: "facebook-messenger-clone-c7519.firebaseapp.com",
  projectId: "facebook-messenger-clone-c7519",
  storageBucket: "facebook-messenger-clone-c7519.appspot.com",
  messagingSenderId: "37644780607",
  appId: "1:37644780607:web:57e036996f9dca5680248a",
  measurementId: "G-V19E85R490",
});
const db = firebaseApp.firestore();
export default db;
