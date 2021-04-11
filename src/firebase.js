import firebase from "firebase";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyCvmw1EqEBGh6lXfrj3vVQHDvljY7i-MZY",
  authDomain: "todolist-e985b.firebaseapp.com",
  projectId: "todolist-e985b",
  storageBucket: "todolist-e985b.appspot.com",
  messagingSenderId: "512043599637",
  appId: "1:512043599637:web:4143a3d1fa407e80548b1c",
  measurementId: "G-RM1LCLEK4J",
});

const db = firebase.firestore();

export { db };
