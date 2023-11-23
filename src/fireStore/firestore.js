// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDkAcnsK5Lc26_JzLle8awtss4srP76r9g",
    authDomain: "registration-form-6deec.firebaseapp.com",
    databaseURL: "https://registration-form-6deec-default-rtdb.firebaseio.com",
    projectId: "registration-form-6deec",
    storageBucket: "registration-form-6deec.appspot.com",
    messagingSenderId: "247789715453",
    appId: "1:247789715453:web:a849c52bb47602b3d66394",
    measurementId: "G-X3Z53CJZH9"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db