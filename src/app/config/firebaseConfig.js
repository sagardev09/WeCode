import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyAqiIw15du4XGDEe5xhoEZ3sXGQto9n13w",
    authDomain: "wecode-6c6f8.firebaseapp.com",
    projectId: "wecode-6c6f8",
    storageBucket: "wecode-6c6f8.appspot.com",
    messagingSenderId: "756410255752",
    appId: "1:756410255752:web:cc86471d4e0fb61df9923d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);