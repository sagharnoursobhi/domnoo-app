// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBffRZ51zfK4dK5txCNB5Hw8ZzXRJBFP3s",
  authDomain: "domnoo-53917.firebaseapp.com",
  databaseURL: "https://domnoo-53917-default-rtdb.firebaseio.com",
  projectId: "domnoo-53917",
  storageBucket: "domnoo-53917.appspot.com",
  messagingSenderId: "34889947539",
  appId: "1:34889947539:web:1ff890608a2da6e7adb066",
  measurementId: "G-F72W2S7FKR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);