import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA40aMMwp68MG8CzHp3_Fzi6wpqcNWhMY8",
  authDomain: "to-do-list-3b02f.firebaseapp.com",
  projectId: "to-do-list-3b02f",
  storageBucket: "to-do-list-3b02f.appspot.com",
  messagingSenderId: "782955114750",
  appId: "1:782955114750:web:0bca022c514f93443075af",
});

const db = firebaseApp.firestore();

export default db;
