// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBe7WsKvH70eXFkWGSQbQ8AeRe0f_z-QDM",
  authDomain: "easy-jobs-coding-test.firebaseapp.com",
  projectId: "easy-jobs-coding-test",
  storageBucket: "easy-jobs-coding-test.appspot.com",
  messagingSenderId: "279431264843",
  appId: "1:279431264843:web:4b667d630e1c6e8bf3ebce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;