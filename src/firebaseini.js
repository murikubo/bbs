// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFW5Wt8qTUl757FVd9ej6KtlLb3dus-sE",
  authDomain: "inha-2e804.firebaseapp.com",
  projectId: "inha-2e804",
  storageBucket: "inha-2e804.appspot.com",
  messagingSenderId: "709208446204",
  appId: "1:709208446204:web:a3b71a2b2c7796820ff379"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);