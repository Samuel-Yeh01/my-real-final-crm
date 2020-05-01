const firebase = require("firebase");
const firebaseConfig = {
  apiKey: "AIzaSyCM3P_Q_gh-2hjX_wuYYTXdqLhCO8eGzJQ",
  authDomain: "crm-final-project.firebaseapp.com",
  databaseURL: "https://crm-final-project.firebaseio.com",
  projectId: "crm-final-project",
  storageBucket: "crm-final-project.appspot.com",
  messagingSenderId: "608605938919",
  appId: "1:608605938919:web:dc94f37186364b47ba6e42",
  measurementId: "G-ZPCVFBFNJK",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
