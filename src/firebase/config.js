// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyx6Y2HP8Eci2wCjexDUfcTGJcUzMlqGg",
  authDomain: "react-curso-7b8ab.firebaseapp.com",
  projectId: "react-curso-7b8ab",
  storageBucket: "react-curso-7b8ab.appspot.com",
  messagingSenderId: "833488961785",
  appId: "1:833488961785:web:dec677dd4a62c8adf8a228"
};

export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );