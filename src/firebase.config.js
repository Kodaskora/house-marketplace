// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDxQ-4x8x1DVP0gyWSj7cB0DJN4qnoEJKI',
  authDomain: 'house-marketplace-app-607a2.firebaseapp.com',
  projectId: 'house-marketplace-app-607a2',
  storageBucket: 'house-marketplace-app-607a2.appspot.com',
  messagingSenderId: '273396454408',
  appId: '1:273396454408:web:57257122afd9d86030edbd',
  measurementId: 'G-PRS33DDF5L',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore();
