// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEDSKMT-EBUA4-obV66VeyzYn_NGgvMLs",
  authDomain: "twitter-8947c.firebaseapp.com",
  projectId: "twitter-8947c",
  storageBucket: "twitter-8947c.firebasestorage.app",
  messagingSenderId: "174266786941",
  appId: "1:174266786941:web:c3e1ad7cfe1d587b54bd14",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// auth referansını al
export const auth = getAuth(app);

// google sağlayısının kurulumu
export const provider = new GoogleAuthProvider();

// veritabanının referansını al
export const db = getFirestore(app);
