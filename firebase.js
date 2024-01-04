// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnpQ4tF7CiZbhHE0cUxWHAGs7nSIA6PtQ",
  authDomain: "ecommerce123-645c1.firebaseapp.com",
  projectId: "ecommerce123-645c1",
  storageBucket: "ecommerce123-645c1.appspot.com",
  messagingSenderId: "1037574481769",
  appId: "1:1037574481769:web:d0602ce37af320830efff8",
  measurementId: "G-520Z1MGLTC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();