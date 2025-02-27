// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBBYfjRhTPTiiM7P4QSR9oS6d1n1yX2Dpg",
  authDomain: "iot-farming-fc378.firebaseapp.com",
  projectId: "iot-farming-fc378",
  storageBucket: "iot-farming-fc378.appspot.com",
  messagingSenderId: "316592209869",
  appId: "1:316592209869:web:d911977865e59ad8514e84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
