import * as firebase from "firebase/app";
import "firebase/firestore";

// Initialize Firebase
const config = {
  apiKey: "AIzaSyANbQv49I8VHZFWM9AlY669jBMi4xSdsrQ",
  authDomain: "trucking-4c8af.firebaseapp.com",
  databaseURL: "https://trucking-4c8af.firebaseio.com",
  projectId: "trucking-4c8af",
  storageBucket: "trucking-4c8af.appspot.com",
  messagingSenderId: "445270989048"
};

firebase.initializeApp(config);
var db = firebase.firestore();

export { db };
