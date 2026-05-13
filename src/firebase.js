// ─── Firebase v9 Modular SDK ──────────────────────────────────────────────────
// Replace the firebaseConfig values below with your own from:
// Firebase Console → Project Settings → General → Your apps → Firebase SDK snippet
// ─────────────────────────────────────────────────────────────────────────────

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB40yFO52Z1CmNA1usU2qCZG_OPJzNwzQo",
  authDomain: "portfolio-users-2003.firebaseapp.com",
  projectId: "portfolio-users-2003",
  storageBucket: "portfolio-users-2003.firebasestorage.app",
  messagingSenderId: "196481942846",
  appId: "1:196481942846:web:8e0d6a73f26f6bf838d86f",
  measurementId: "G-9488CY1RBZ"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
