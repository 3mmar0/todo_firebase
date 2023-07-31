import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCq_dXbnssiedOReSmUPPpsjx1IfywVz0A",
  authDomain: "todo-page-27c1a.firebaseapp.com",
  projectId: "todo-page-27c1a",
  storageBucket: "todo-page-27c1a.appspot.com",
  messagingSenderId: "430479436471",
  appId: "1:430479436471:web:56cf46b37d104a37837b32",
});

const db = firebaseApp.firestore();

export default db;
