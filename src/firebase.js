import firebase from 'firebase/app'
import  'firebase/firestore'
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAM8-iE9pkQjEAcMk9p-Hwow_DulxbjmzI",
    authDomain: "fb-crud-react-d571e.firebaseapp.com",
    projectId: "fb-crud-react-d571e",
    storageBucket: "fb-crud-react-d571e.appspot.com",
    messagingSenderId: "1007869489559",
    appId: "1:1007869489559:web:8327df370c4c4549fb54d2"
  };
  // Initialize Firebase
 const fb = firebase.initializeApp(firebaseConfig);
 export const db = fb.firestore()