// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpB38P5ODcz-d052IgQEUPsQOG0OIupS8",
  authDomain: "dragon-news-auth-project-724b8.firebaseapp.com",
  projectId: "dragon-news-auth-project-724b8",
  storageBucket: "dragon-news-auth-project-724b8.appspot.com",
  messagingSenderId: "724525459283",
  appId: "1:724525459283:web:47f5e693326fda2159a3a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;