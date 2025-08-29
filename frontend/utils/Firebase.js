import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY ,
   authDomain: "loginstudynow.firebaseapp.com",
  projectId: "loginstudynow",
  storageBucket: "loginstudynow.firebasestorage.app",
  messagingSenderId: "657006394454",
  appId: "1:657006394454:web:4cc340c7cb22d9fcbd0ff7",

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export {auth,provider}





