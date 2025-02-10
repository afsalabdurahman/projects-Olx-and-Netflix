
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_DOMAIN,
  projectId: "sample-661c6",
  storageBucket: "sample-661c6.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_API_MSG,
  appId: import.meta.env.VITE_APP_ID
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export let collection =getFirestore(app)
export const auth = getAuth(app);