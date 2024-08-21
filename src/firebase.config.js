// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6HZ6sMjtKs6mYC3UApuP1ec9VtLUt_vI",
  authDomain: "online-job-portal-159e8.firebaseapp.com",
  projectId: "online-job-portal-159e8",
  storageBucket: "online-job-portal-159e8.appspot.com",
  messagingSenderId: "705927312308",
  appId: "1:705927312308:web:26bc35688779f9059078e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db=getFirestore();
export {db};