// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/database";
import "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD21hrWed4BCOo2OroXjUpz6LHb-vNX1bQ",
  authDomain: "react-ecom-44f4f.firebaseapp.com",
  projectId: "react-ecom-44f4f",
  storageBucket: "react-ecom-44f4f.appspot.com",
  messagingSenderId: "215401406913",
  appId: "1:215401406913:web:82820bcdbe8713eff94f40",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.database();

export default firebase;
