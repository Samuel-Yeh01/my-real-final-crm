const firebase = require("firebase");
const db = firebase.firestore();
const toDoListRef = db.collection("toDoList");
const allToDo = toDoListRef
  .get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      console.log(doc.id, "=>", doc.data());
    });
  })
  .catch((err) => {
    console.log("Error getting documents", err);
  });

let toDoController = {
  // 瀏覽todo
  getToDo: (req, res) => {
    res.render("widgets/toDoList", {
      parent: "Widgets",
      title: "toDoList",
      layout: "main",
      data: allToDo,
    });
  },
  // 張貼todo
  postToDo: (req, res) => {},
  // 更新todo
  putToDo: (req, res) => {},
  // 刪除todo
  deleteToDo: (req, res) => {},
};

module.exports = toDoController;
