import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiStCyzLCDYHOKXsvNrgkv2aLPvCTSMWA",
  authDomain: "rabblepop-f7f9c.firebaseapp.com",
  projectId: "rabblepop-f7f9c",
  storageBucket: "rabblepop-f7f9c.appspot.com",
  messagingSenderId: "72504510117",
  appId: "1:72504510117:web:0f7d62e82e4640fa1eaf4c",
  measurementId: "G-2RY1809Y95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

export default db