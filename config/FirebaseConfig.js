// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import {EXPO_PUBLIC_API_KEY} from "@env"
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: EXPO_PUBLIC_API_KEY,
  authDomain: "ai-travel-planner-app-9a13c.firebaseapp.com",
  projectId: "ai-travel-planner-app-9a13c",
  storageBucket: "ai-travel-planner-app-9a13c.appspot.com",
  messagingSenderId: "807508318169",
  appId: "1:807508318169:web:5145d2d7e102696ad56bc8",
  measurementId: "G-T07RFMF2RK"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);

