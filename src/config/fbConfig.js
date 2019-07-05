import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyAyxE5AJOBBRiYrskZi0-Fx9RA_IzNNKk0",
  authDomain: "slate-cd413.firebaseapp.com",
  databaseURL: "https://slate-cd413.firebaseio.com",
  projectId: "slate-cd413",
  storageBucket: "",
  messagingSenderId: "75196969336",
  appId: "1:75196969336:web:9d5fd862df976169"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
