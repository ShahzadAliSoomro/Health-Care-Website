import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCEdrPfB9DrBffC82_Gw22-qPxMBPZhbKI",
  authDomain: "webhealthcare-36632.firebaseapp.com",
  projectId: "webhealthcare-36632",
  storageBucket: "webhealthcare-36632.appspot.com",
  messagingSenderId: "873788995423",
  appId: "1:873788995423:web:4451d7f6767c36007b68ea",
  measurementId: "G-WCNECRLXHE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export {auth};
