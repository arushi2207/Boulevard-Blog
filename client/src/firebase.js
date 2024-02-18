// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-df621.firebaseapp.com",
  projectId: "mern-blog-df621",
  storageBucket: "mern-blog-df621.appspot.com",
  messagingSenderId: "337965055179",
  appId: "1:337965055179:web:9fc1bd037537dacdbfef4e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);