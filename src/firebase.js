// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAS0TC2-ryXX5oyAGg_HmeFkmSW6iLd2Rw",
  authDomain: "discord-2cdf4.firebaseapp.com",
  databaseURL: "https://discord-2cdf4.firebaseio.com",
  projectId: "discord-2cdf4",
  storageBucket: "discord-2cdf4.appspot.com",
  messagingSenderId: "1020395978925",
  appId: "1:1020395978925:web:dc6d94839e30b4946d4624",
  measurementId: "G-5H4XY5M0NF",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebaseApp.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export{auth,provider};

export default db;