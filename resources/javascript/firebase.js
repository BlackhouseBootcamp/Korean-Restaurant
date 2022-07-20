import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-analytics.js";
// import { getAuth } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyD0_gCOES-UhYumKi3y4IG9jYWIR_Q23G4",
	authDomain: "korean-restaurant-c0dfd.firebaseapp.com",
	projectId: "korean-restaurant-c0dfd",
	storageBucket: "korean-restaurant-c0dfd.appspot.com",
	messagingSenderId: "438027302138",
	appId: "1:438027302138:web:5a49c00c2cd0f061820543",
	measurementId: "G-GZ8VC73TJX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
