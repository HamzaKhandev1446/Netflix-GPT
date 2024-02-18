// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_eBJN1AZtWsSh9hLskEwcmCsmyJJU6Qo",
  authDomain: "netflixgpt-9d9d8.firebaseapp.com",
  projectId: "netflixgpt-9d9d8",
  storageBucket: "netflixgpt-9d9d8.appspot.com",
  messagingSenderId: "182695965446",
  appId: "1:182695965446:web:9aadb2c389abfe47d6a487",
  measurementId: "G-L74GGGEZ72"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();