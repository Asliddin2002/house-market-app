import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBp16VuFQLhcstxHTiSKZnYXZ7SKxtF8P0",
  authDomain: "house-market-4cc14.firebaseapp.com",
  projectId: "house-market-4cc14",
  storageBucket: "house-market-4cc14.appspot.com",
  messagingSenderId: "498962788472",
  appId: "1:498962788472:web:0ea52b6eef827a641ffd8d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db =getFirestore()