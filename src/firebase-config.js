// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "",
  authDomain: "fb-auth-fe87e.firebaseapp.com",
  projectId: "fb-auth-fe87e",
  storageBucket: "fb-auth-fe87e.appspot.com",
  messagingSenderId: "",
  appId: ""
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  const auth = getAuth(app);