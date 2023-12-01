// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const apikey = import.meta.env.VITE_REACT_APP_FIREBASE_API_KEY;
const authDomain = import.meta.env.VITE_REACT_APP_FIREBASE_AUTH_DOMAIN;
const projectId = import.meta.env.VITE_REACT_APP_FIREBASE_PROJECT_ID;
const storageBucket = import.meta.env.VITE_REACT_APP_FIREBASE_STORAGE_BUCKET;
const messagingSenderId = import.meta.env.VITE_REACT_APP_MESSAGING_SENDER;
const appId = import.meta.env.VITE_REACT_APP_APP_ID;
const firebaseConfig = {
  apiKey: apikey,
  authDomain: authDomain,
  projectId: projectId,
  storageBucket: storageBucket,
  messagingSenderId: messagingSenderId,
  appId: appId,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
