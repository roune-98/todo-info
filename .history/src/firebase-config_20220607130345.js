import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC6FDFEXsIu2_94AWIB7LunFAzQHiVIX9A",
    authDomain: "projet2bkd.firebaseapp.com",
    projectId: "projet2bkd",
    storageBucket: "projet2bkd.appspot.com",
    messagingSenderId: "416737834491",
    appId: "1:416737834491:web:1e6c15833a40fcc1d7475e"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
import {getAuth} from "firebase/auth";
export const db= getFirestore(app);