import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyAr-818qW3SPC_lAPmXcONOEo_6yD6hjJs",
  authDomain: "barter-system-fce7c.firebaseapp.com",
  projectId: "barter-system-fce7c",
  storageBucket: "barter-system-fce7c.appspot.com",
  messagingSenderId: "1051897074894",
  appId: "1:1051897074894:web:2568c69732069359ee6c9f",
  measurementId: "G-18TCWMLB00"
};
  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
