// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAjfx6-ajV-PtoM0szZzYrF6gyvxS2BJg",
  authDomain: "react-native-workshop-7ec08.firebaseapp.com",
  projectId: "react-native-workshop-7ec08",
  storageBucket: "react-native-workshop-7ec08.appspot.com",
  messagingSenderId: "663216892583",
  appId: "1:663216892583:web:575f1cd729192dce464982",
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
