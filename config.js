// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import firebase from 'firebase'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoFztny4HFZ-v5ItodI6XkRvuP1I2ukaU",
  authDomain: "biblioteca-digital-39f94.firebaseapp.com",
  projectId: "biblioteca-digital-39f94",
  storageBucket: "biblioteca-digital-39f94.appspot.com",
  messagingSenderId: "967098688850",
  appId: "1:967098688850:web:029de1767d171c87b2068b"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase.firestore();

