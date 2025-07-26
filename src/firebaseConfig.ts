import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig={
    apiKey: "AIzaSyDM2JSXXyOG0DJNYJWuXHqxIwNGh_2WAX4",
  authDomain: "ciim-auth.firebaseapp.com",
  projectId: "ciim-auth",
  storageBucket: "ciim-auth.firebasestorage.app",
  messagingSenderId: "490766361548",
  appId: "1:490766361548:web:157a22e6a5b83a5d53f369",
  measurementId: "G-Z75TRFBLTZ"};
const app=initializeApp(firebaseConfig);
export const auth=getAuth(app);