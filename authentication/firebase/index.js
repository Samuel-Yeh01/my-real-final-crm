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
const db = firebase.firestore();

// 使用範例程式測試是否成功連上
// db.collection("expense")
// .doc("breakfast001")
// .set({
//   type: "breakfast",
//   account: "cash",
//   title: "鮪魚蛋吐司",
//   dollar: "35",
// })
// .then(() => console.log("Document successfully written!"))
// .catch((error) => console.error("Error writing document: ", error));

// .doc("breakfast001")
// .set({
//   test: "我蓋掉拉！",
// });
// .doc("breakfast001")

// .set(
//   {
//     test: "用 merge 的話不會蓋掉哦",
//   },
//   { merge: true }
// );

// .doc()
// .set({
//   type: "lunch",
//   account: "card",
//   title: "菲力牛排",
//   dollar: "1680",
// });

// .doc("breakfast001")
// .update({
//   title: "黑胡椒鐵板麵加蛋",
//   dollar: "50",
// })
// .then(() => console.log("Document successfully updated!"));

// .add({
//   type: "dinner",
//   account: "pay",
//   title: "牛肉炒飯",
//   dollar: "100",
// })
// .then((docRef) => console.log("Document written with ID: ", docRef.id));

// .doc("breakfast001")
// .delete()
// .then(() => console.log("Document successfully deleted!"));
