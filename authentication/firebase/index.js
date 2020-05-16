const firebase = require("firebase");
require("dotenv").config();
const firebaseConfig = {
  apiKey: process.env.APIKEY,
  authDomain: process.env.AUTHDOMAIN,
  databaseURL: process.env.DATABASEURL,
  projectId: process.env.PROJECTID,
  storageBucket: process.env.STORAGEBUCKET,
  messagingSenderId: process.env.MESSAGINGSENDERID,
  appId: process.env.APPID,
  measurementId: process.env.MEASUREMENTID,
};

firebase.initializeApp(firebaseConfig);
// 以下為幫 firestore 建立 seed data
const db = firebase.firestore();

db.collection("toDoList")
  .doc("toDoList001")
  .set({
    id: 1,
    title: "Arrange meeting for Vuely update",
    date: "May 19, 2020",
    completed: true,
  })
  .then(() => console.log("Document successfully written!"))
  .catch((error) => console.error("Error writing document: ", error));

db.collection("toDoList")
  .doc("toDoList002")
  .set({
    id: 2,
    title: "Create new pages for theme",
    date: "May 20, 2020",
    completed: false,
  })
  .then(() => console.log("Document successfully written!"))
  .catch((error) => console.error("Error writing document: ", error));

db.collection("toDoList")
  .doc("toDoList003")
  .set({
    id: 3,
    title: "Prepare launch image for Lawking",
    date: "May 20, 2020",
    completed: false,
  })
  .then(() => console.log("Document successfully written!"))
  .catch((error) => console.error("Error writing document: ", error));

db.collection("toDoList")
  .doc("toDoList004")
  .set({
    id: 4,
    title: "Pay internet bill",
    date: "May 20, 2020",
    completed: false,
  })
  .then(() => console.log("Document successfully written!"))
  .catch((error) => console.error("Error writing document: ", error));

db.collection("toDoList")
  .doc("toDoList005")
  .set({
    id: 5,
    title: "Generate salary reports",
    date: "May 20, 2020",
    completed: false,
  })
  .then(() => console.log("Document successfully written!"))
  .catch((error) => console.error("Error writing document: ", error));

db.collection("toDoList")
  .doc("toDoList006")
  .set({
    id: 6,
    title: "Update dashboard",
    date: "May 21, 2020",
    completed: false,
  })
  .then(() => console.log("Document successfully written!"))
  .catch((error) => console.error("Error writing document: ", error));
