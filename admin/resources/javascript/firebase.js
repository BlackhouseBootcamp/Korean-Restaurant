// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA9tQUR6XtB5r1X7GskrN5mO4o78AhfEdw",
    authDomain: "korean-restaurant-a208d.firebaseapp.com",
    databaseURL: "https://korean-restaurant-a208d-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "korean-restaurant-a208d",
    storageBucket: "korean-restaurant-a208d.appspot.com",
    messagingSenderId: "245094343209",
    appId: "1:245094343209:web:b6ba7a41e6e10adef5f238",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
