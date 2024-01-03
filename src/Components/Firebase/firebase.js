// Ceci est utilisé pour la version 7, 8
// import App from 'firebase/app'

// Version 10 de firebase que j'utilise
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const config = {

    apiKey: "AIzaSyC7N_R6zQYa54Jaw7c6qyH22_mpo9dzmLA",
  
    authDomain: "marvel-quiz-1a169.firebaseapp.com",
  
    projectId: "marvel-quiz-1a169",
  
    storageBucket: "marvel-quiz-1a169.appspot.com",
  
    messagingSenderId: "1099005772566",
  
    appId: "1:1099005772566:web:524d2de3b3f86982b8c637"
  
  };
 
const app = initializeApp(config)
export const auth = getAuth(app)