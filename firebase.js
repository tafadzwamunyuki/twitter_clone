// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "twitter-clone-e3717.firebaseapp.com",
  projectId: "twitter-clone-e3717",
  storageBucket: "twitter-clone-e3717.appspot.com",
  messagingSenderId: "581737169708",
  appId: "1:581737169708:web:1f3024d5eb4969c82da289"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const storage = getStorage()
export {app, db, storage}