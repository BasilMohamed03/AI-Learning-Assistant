import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpA34ECAiv0oaXjwgK_rorL1dfVXDVjeU",
  authDomain: "login-auth-28dd5.firebaseapp.com",
  projectId: "login-auth-28dd5",
  storageBucket: "login-auth-28dd5.appspot.com",
  messagingSenderId: "983603238840",
  appId: "1:983603238840:web:c43de8afa11f6088aba14d",
  measurementId: "G-VERZ021T2X"
};

const app = initializeApp(firebaseConfig);
const auth  = getAuth(app);
export { app, auth };