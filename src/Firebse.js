import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCdrWmOAgCqpReI0emr9nNC9nO0sWA6vrQ",
  authDomain: "linkedin-clone-c98f0.firebaseapp.com",
  projectId: "linkedin-clone-c98f0",
  storageBucket: "linkedin-clone-c98f0.appspot.com",
  messagingSenderId: "659877310846",
  appId: "1:659877310846:web:0acdcc39a386071687432f",
  measurementId: "G-QKPNBMH5GZ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
