import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAEUCyFfsG_7IKqEBMLFz808ljMzZHWQCE",
  authDomain: "oualid--clone.firebaseapp.com",
  databaseURL: "https://oualid--clone.firebaseio.com",
  projectId: "oualid--clone",
  storageBucket: "oualid--clone.appspot.com",
  messagingSenderId: "26453014173",
  appId: "1:26453014173:web:08871248bb9461aff1c674",
  measurementId: "G-M44JM4HR5H",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
