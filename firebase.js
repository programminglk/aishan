// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuy8wBzrBXVDymeF08DE4D3Mofv9Tme3w",
  authDomain: "slailk.firebaseapp.com",
  projectId: "slailk",
  storageBucket: "slailk.appspot.com",
  messagingSenderId: "671487146788",
  appId: "1:671487146788:web:d86557f9d52e66257b91b1",
  measurementId: "G-WEHPS7DZBC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);