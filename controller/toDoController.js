const firebase = require("firebase");
const db = firebase.firestore();

let toDoController = {
  // 瀏覽todo
  getToDo: (req, res) => {
    // 調整 getCategories
    db.collection("toDoList")
      .where("id", ">=", 0)
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
        });
      })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });

    res.render("widgets/toDoList", {
      parent: "Widgets",
      title: "toDoList",
      layout: "main",
      // data: data,
    });
  },
  // 新增分類
  postCategory: (req, res) => {
    categoryService.postCategory(req, res, (data) => {
      if (data["status"] === "error") {
        req.flash("error_messages", data["message"]);
        return res.redirect("back");
      }
      req.flash("success_messages", data["message"]);
      res.redirect("admin/categories", data);
    });
  },
  // 新增 putCategory-也要加上負責修改資料 controller action：
  putCategory: (req, res) => {
    categoryService.putCategory(req, res, (data) => {
      if (data["status"] === "error") {
        req.flash("error_messages", data["message"]);
        return res.redirect("back");
      }
      req.flash("success_messages", data["message"]);
      res.redirect("admin/categories", data);
    });
  },
  // 刪除分類
  deleteCategory: (req, res) => {
    categoryService.deleteCategory(req, res, (data) => {
      if (data["status"] === "success") {
        return res.redirect("admin/categories");
      }
    });
  },
};
module.exports = toDoController;
