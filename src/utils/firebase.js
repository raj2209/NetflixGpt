// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXeSJ0rI3OCkei0ADFCH-xnBKXJPCA3CY",
  authDomain: "netflixgpt-764f9.firebaseapp.com",
  databaseURL: "https://netflixgpt-764f9-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "netflixgpt-764f9",
  storageBucket: "netflixgpt-764f9.firebasestorage.app",
  messagingSenderId: "372486703762",
  appId: "1:372486703762:web:354a60cbeed2e4f8d1b44b",
  measurementId: "G-XV3Y121CM1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app;