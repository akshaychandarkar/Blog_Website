// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "bits-and-blogs-a72ff.firebaseapp.com",
  projectId: "bits-and-blogs-a72ff",
  storageBucket: "bits-and-blogs-a72ff.appspot.com",
  messagingSenderId: "415381337796",
  appId: "1:415381337796:web:ce2af771b0e35c0f0afb91",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
