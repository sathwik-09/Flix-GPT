// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeeEEXTdZEFa9AoU0GW8VYy9WBRMyDY5s",
  authDomain: "flixgpt-da5a2.firebaseapp.com",
  projectId: "flixgpt-da5a2",
  storageBucket: "flixgpt-da5a2.firebasestorage.app",
  messagingSenderId: "707381624820",
  appId: "1:707381624820:web:05ef9c302d409b7f8483a1",
  measurementId: "G-TS1HYJ00ZM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);