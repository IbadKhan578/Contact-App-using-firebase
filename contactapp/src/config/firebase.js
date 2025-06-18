// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4_sI9-jLBCloymjHPiJAijFFlhViuSCk",
  authDomain: "contact-app-a9959.firebaseapp.com",
  projectId: "contact-app-a9959",
  storageBucket: "contact-app-a9959.firebasestorage.app",
  messagingSenderId: "389065773463",
  appId: "1:389065773463:web:831a91673d743cb65034d2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
 const db = getFirestore(app);
 export default db;