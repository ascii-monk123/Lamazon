import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyDDVAylI5PynPO2r4JLnHui3rfNIUNU6j8",
  authDomain: "l-e955e.firebaseapp.com",
  databaseURL: "https://l-e955e.firebaseio.com",
  projectId: "l-e955e",
  storageBucket: "l-e955e.appspot.com",
  messagingSenderId: "314846530004",
  appId: "1:314846530004:web:4c2af23333a0c76a01ee41",
};

//initialize the firebase app
firebase.initializeApp(firebaseConfig);

export default firebase;
