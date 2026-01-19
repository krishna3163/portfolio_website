// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB04YYZu9WmLvCPGC41ukZ0tE4GbYOAp-E",
    authDomain: "portfolio-website-19e93.firebaseapp.com",
    projectId: "portfolio-website-19e93",
    storageBucket: "portfolio-website-19e93.firebasestorage.app",
    messagingSenderId: "118129096501",
    appId: "1:118129096501:web:b55c2745302f3f051afe7c"
};

// Initialize Firebase
// Use getApps() to check if firebase is already initialized to avoid errors in Next.js HMR/SSR
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);
import { GoogleAuthProvider } from "firebase/auth";
const googleProvider = new GoogleAuthProvider();

export { auth, storage, db, app, googleProvider };
