import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDT-umBwz6CaIq4Nm8AnEveRFglKg15v0U",
  authDomain: "clone-dfea6.firebaseapp.com",
  databaseURL: "https://clone-dfea6.firebaseio.com",
  projectId: "clone-dfea6",
  storageBucket: "clone-dfea6.appspot.com",
  messagingSenderId: "862251238250",
  appId: "1:862251238250:web:1ae1cba231d680f3091b13",
  measurementId: "G-X0W4SEHMXC",
});

const auth = firebase.auth();

export { auth };
