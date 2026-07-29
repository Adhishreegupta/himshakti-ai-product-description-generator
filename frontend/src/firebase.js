import { initializeApp } from "firebase/app";

import {
  getAuth,
  GoogleAuthProvider
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDkGlNxqjmCYU22sq1b4NskV2Wa59jgtp4",
  authDomain: "copykart-ai.firebaseapp.com",
  projectId: "copykart-ai",
  storageBucket: "copykart-ai.firebasestorage.app",
  messagingSenderId: "452896591721",
  appId: "1:452896591721:web:544db31a7215054c6af7f8",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();