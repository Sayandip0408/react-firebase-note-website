import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDQsi0Imo0HXZWq88kyYZhsVqvoIao5Ylc",
    authDomain: "react-note-app-8e28b.firebaseapp.com",
    projectId: "react-note-app-8e28b",
    storageBucket: "react-note-app-8e28b.appspot.com",
    messagingSenderId: "405702745413",
    appId: "1:405702745413:web:ad3ea2451080257543f22c",
    measurementId: "G-F06TP7TNFG"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
