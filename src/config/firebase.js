import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PRJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKED,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

export const googleFirebase = initializeApp(firebaseConfig);
export const githubFirebase = initializeApp(firebaseConfig);