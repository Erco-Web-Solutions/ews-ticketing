import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyABUSj4PxBr7z9Irpk2v2FftU6XKwIQco4",
  authDomain: "ews-entrevue.firebaseapp.com",
  projectId: "ews-entrevue",
  storageBucket: "ews-entrevue.firebasestorage.app",
  messagingSenderId: "1011105977299",
  appId: "1:1011105977299:web:5c625379688142b0b05526",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
