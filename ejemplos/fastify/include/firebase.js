const admin = require('firebase-admin');
const serviceAccount = require('../src/firebase/serviceAccountKey.json');

const { initializeApp } = require('firebase/app');
const firebaseConfig = {
    apiKey: "AIzaSyAk7ruyeuGcdQRJ1CIW3VMJr4ioyxPl6QA",
    authDomain: "aiep-frontend-2023.firebaseapp.com",
    projectId: "aiep-frontend-2023",
    storageBucket: "aiep-frontend-2023.appspot.com",
    messagingSenderId: "914156216806",
    appId: "1:914156216806:web:2515f25a4d4d574efc3627",
    measurementId: "G-VQD9WMELNX"
};
const app = initializeApp(firebaseConfig); 

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

module.exports = {admin, app};