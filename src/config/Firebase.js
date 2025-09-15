import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA_2krayMzBw5-n0yuYzwz51_PLtG5O0ak",
  authDomain: "moiz-ca914.firebaseapp.com",
  projectId: "moiz-ca914",
  storageBucket: "moiz-ca914.firebasestorage.app",
  messagingSenderId: "272558215293",
  appId: "1:272558215293:web:08a01bf7b49f3afe6d6114",
  measurementId: "G-M1N32R63XN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
