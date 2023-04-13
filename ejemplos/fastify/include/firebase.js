const { initializeApp } = require("firebase/app");

const firebaseConfig = {
  apiKey: "AIzaSyAhMksp5K5eL0vcB1EiOEI6ZWe3-xm4pSo",
  authDomain: "prueba-2023-e3289.firebaseapp.com",
  projectId: "prueba-2023-e3289",
  storageBucket: "prueba-2023-e3289.appspot.com",
  messagingSenderId: "613936360409",
  appId: "1:613936360409:web:f18d66543df464025c47c8",
  measurementId: "G-LS3Y1HDTTR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

module.exports = app;