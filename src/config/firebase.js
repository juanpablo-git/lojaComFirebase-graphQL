import {initializeApp}from "firebase/app"
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export const firebaseConfig = {
    apiKey: "AIzaSyCUZHIgv0oS-lZMbNGkyzDX-eVO1RZJVig",
    authDomain: "teste-8b623.firebaseapp.com",
    projectId: "teste-8b623",
    storageBucket: "teste-8b623.appspot.com",
    messagingSenderId: "931215221495",
    appId: "1:931215221495:web:ceb942edd9d594f087a9f2"
  };

const app = initializeApp(firebaseConfig);



