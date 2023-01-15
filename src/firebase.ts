// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwt85WJcRvOcrn4TYpY5tmBRBikAUKWXg",
  authDomain: "lendsqr-fe-test-18800.firebaseapp.com",
  projectId: "lendsqr-fe-test-18800",
  storageBucket: "lendsqr-fe-test-18800.appspot.com",
  messagingSenderId: "576626824674",
  appId: "1:576626824674:web:86fe93ba1eeacbd6d515bb",
  measurementId: "G-YX9F4ZHBJG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//Auth
const Auth = getAuth(app)

// const SignIn = createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
//     const user = userCredential.user;
// })
// .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage =error.message;
// })

export default Auth