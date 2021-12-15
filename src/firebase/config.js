import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAQhe5Ulbp8JuBgpLHxhytIUuPGc8Jv9iI",
  authDomain: "money-app-e20aa.firebaseapp.com",
  projectId: "money-app-e20aa",
  storageBucket: "money-app-e20aa.appspot.com",
  messagingSenderId: "151976010644",
  appId: "1:151976010644:web:20b3e19fa9e5e16023e581",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init service
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
