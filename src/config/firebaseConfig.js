import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCFcVvOYsthOhQMvuwOlKinFUFFv08XxBk",
  authDomain: "ptac3-f2a89.firebaseapp.com",
  projectId: "ptac3-f2a89",
  storageBucket: "ptac3-f2a89.firebasestorage.app",
  messagingSenderId: "667451435173",
  appId: "1:667451435173:web:03f3b0ceb8d34e1280c54c",
  measurementId: "G-2C7EWQVYFH"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };