// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/database";
import "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAejI_3EZ1jvPE7g_ZrtGVFRabSGMwLMZ0",
  authDomain: "livegoods-78a2f.firebaseapp.com",
  databaseURL: "https://livegoods-78a2f-default-rtdb.firebaseio.com",
  projectId: "livegoods-78a2f",
  storageBucket: "livegoods-78a2f.appspot.com",
  messagingSenderId: "198172025334",
  appId: "1:198172025334:web:8fbeb677fca4d931f967d7",
  measurementId: "G-CSLSNV0N8W",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.database();

export default firebase;
