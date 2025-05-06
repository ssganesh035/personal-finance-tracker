import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "",
  authDomain: "finance-tracker-f3f44.firebaseapp.com",
  projectId: "finance-tracker-f3f44",
  storageBucket: "finance-tracker-f3f44.firebasestorage.app",
  messagingSenderId: "55547281060",
  appId: "1:55547281060:web:07884cfa9a4d075996f031",
  measurementId: "G-020QMJFNXV"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };
