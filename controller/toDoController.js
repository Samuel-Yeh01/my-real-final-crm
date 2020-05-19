const firebase = require("firebase");
const db = firebase.firestore();
const toDoListCollectionRef = db.collection("toDoList");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const sha256 = require("js-sha256");


// TODO: 功能改寫完後，記得要把 "localhost:3000" 改成 heroku 的地址~
global.document = new JSDOM("localhost:3000").window.document;

let toDoController = {
  // 瀏覽todo
  getToDo: (req, res) => {
    toDoListCollectionRef
      .get()
      .then((snapshot) => {
        let array = [];
        snapshot.forEach((doc) => {
          // console.log(doc.id, "=>", doc.data());
          array.push(doc.data());
        });
        console.log(array);
        res.render("widgets/toDoList", {
          parent: "Widgets",
          title: "toDoList",
          layout: "main",
          data: array,
        });
      })
      .catch((err) => {
        console.log("Error getting documents", err);
      });
  },
  // 張貼todo
  postToDo: (req, res) => {
    let id = sha256("req.body.title");
    return toDoListCollectionRef
      .add({
        id: id,
        title: req.body.title,
        date: req.body.date,
        completed: false,
      })
      .then((snapshot) => {
        res.redirect("/default/widgets/toDoList");
      })
      .catch((err) => {
        console.log("Error adding documents", err);
      });
  },
  // 更新todo
  putToDo: (req, res) => {},
  // 刪除todo
  deleteToDo: (req, res) => {
    console.log(req.params.id);
    toDoListCollectionRef
      .where("id", "==", req.params.id)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          doc.ref
            .delete()
            .then(() => {
              console.log("Document successfully deleted!");
            })
            .catch(function (error) {
              console.error("Error removing document: ", error);
            });
        });
      })
      .then(() => {
        res.redirect("/default/widgets/toDoList");
      })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });
  },
};

module.exports = toDoController;
