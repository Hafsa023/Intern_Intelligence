// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyA6BZ4o1UKLD21FsMzsIFN5Rt9PXClcinM",
  authDomain: "blazelogin-59d90.firebaseapp.com",
  projectId: "blazelogin-59d90",
  storageBucket: "blazelogin-59d90.firebasestorage.app",
  messagingSenderId: "1078304489749",
  appId: "1:1078304489749:web:0f213acf7fb40c8774691c",
  measurementId: "G-V3KV43KH2V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const submitButton = document.getElementById('submit');

submitButton.addEventListener("click", function(event){
    event.preventDefault();
    
    const email = emailInput.value;
    const password = passwordInput.value;

    // Sign up user
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            alert("User signed up successfully!");
          
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert("Error: " + errorMessage);
        });
})
