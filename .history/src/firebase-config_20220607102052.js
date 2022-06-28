import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCRVYCJX6Pll_x8SAJafFflg0YdW82zxgI",
  authDomain: "crudcheikh.firebaseapp.com",
  projectId: "crudcheikh",
  storageBucket: "crudcheikh.appspot.com",
  messagingSenderId: "463089282046",
  appId: "1:463089282046:web:1bf0ae6fd6d7b0ef772eaf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db= getFirestore(app);