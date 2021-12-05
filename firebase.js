// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtqPcrmOQ-vJbc7pZ1VPEsSNf36YRn3rY",
  authDomain: "instagram-2-99ed4.firebaseapp.com",
  projectId: "instagram-2-99ed4",
  storageBucket: "instagram-2-99ed4.appspot.com",
  messagingSenderId: "437455160551",
  appId: "1:437455160551:web:24ae9c9d166a9e678e8e42"
};

// Initialize Firebase
const app = !getApps().length ?  initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();


export { app, db, storage };