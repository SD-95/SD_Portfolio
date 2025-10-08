// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAt2NeVJnimFIpNoeb3vy5n_Gd5XHF-IfI",
  authDomain: "portfolio-ff831.firebaseapp.com",
  projectId: "portfolio-ff831",
  storageBucket: "portfolio-ff831.firebasestorage.app",
  messagingSenderId: "589309019960",
  appId: "1:589309019960:web:cc4e782da5004c13f3a3cd",
  measurementId: "G-MXECF793Q7"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
