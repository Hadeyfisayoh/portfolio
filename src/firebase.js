
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyCdjgb90kwXt3QQZEzzMZzXodC51lhk_JY",
    authDomain: "portfolio-9ec02.firebaseapp.com",
    projectId: "portfolio-9ec02",
    storageBucket: "portfolio-9ec02.appspot.com",
    messagingSenderId: "373234699071",
    appId: "1:373234699071:web:c2694c6bb4d0104cb3218a",
   
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);