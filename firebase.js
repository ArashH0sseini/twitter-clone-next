// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBniBY3m_vxcYBi9UqGH44hzchx4DSv9pA",
  authDomain: "twitter-clone-react-c9877.firebaseapp.com",
  projectId: "twitter-clone-react-c9877",
  storageBucket: "twitter-clone-react-c9877.appspot.com",
  messagingSenderId: "370368527413",
  appId: "1:370368527413:web:6bd4f972a9d9849bf1457c"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
