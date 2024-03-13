import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: 'sweetstore-b2a4c.firebaseapp.com',
  projectId: 'sweetstore-b2a4c',
  storageBucket: 'sweetstore-b2a4c.appspot.com',
  messagingSenderId: '1002390682429',
  appId: '1:1002390682429:web:0297d26e9bf3fb7a3fa354',
  measurementId: 'G-8YHL87WG06',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();
