// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDa1oM7X6gpYpCuKOJBcD8fULa0b6FBeVs",
    authDomain: "online-ide-535da.firebaseapp.com",
    projectId: "online-ide-535da",
    storageBucket: "online-ide-535da.appspot.com",
    messagingSenderId: "296892939044",
    appId: "1:296892939044:web:7a22557cf1445c9c0191b1",
    measurementId: "G-6ZDE4N660S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export default auth;