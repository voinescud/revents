import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/database";
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBR9Z9lr52_7tcR06wikFArL2tRcquU7Dg",
  authDomain: "reventscourse-cc328.firebaseapp.com",
  databaseURL: "https://reventscourse-cc328.firebaseio.com",
  projectId: "reventscourse-cc328",
  storageBucket: "reventscourse-cc328.appspot.com",
  messagingSenderId: "597198361575",
  appId: "1:597198361575:web:78ad7e979bf82ae2e26342",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
