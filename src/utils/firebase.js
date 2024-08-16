// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAL5ch5DLdKSzC7lrW5fzxtosz_199FBRk",
  authDomain: "netflix-gpt-c53aa.firebaseapp.com",
  projectId: "netflix-gpt-c53aa",
  storageBucket: "netflix-gpt-c53aa.appspot.com",
  messagingSenderId: "212776340862",
  appId: "1:212776340862:web:5582756648d61143d7b72f",
  measurementId: "G-4YTWZJKEHF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
https://github.com/PradeepKumhar/Netflix-GPT