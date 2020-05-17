const express = require("express");
const router = express.Router();
const firebase = require("firebase");
const data = require("../data");
const axios = require("axios");
const Auth0Strategy = require("passport-auth0");
const passport = require("passport");
const toDoController = require("../../controller/toDoController.js");
const db = firebase.firestore();
const toDoListRef = db.collection("toDoList");
// API Hit

router.use(function (req, res, next) {
  if (checkCurrentSession(req, res, next)) {
    next();
  }
});

router.post("/dashboard/ecommerce/toDoList", (req, res) => {
  let id = req.body.id;
  //console.log(id)
  //hit API Here to complete the task.
  res.json({
    success: true,
  });
});

// Sale Reload API

router.post("/dashboard/ecommerce", (req, res) => {
  let id = req.body.id;
  console.log(id);
  //hit API Here to complete the task.
  res.json({
    success: true,
  });
});

router.get("/", function (req, res, next) {
  res.redirect("/session/login");
});

router.get("/dashboard/ecommerce", function (req, res, next) {
  // getData();
  res.render("dashboard/ecommerce", {
    title: "Node Xpress App",
    layout: "main",
    data: data,
  });
});

// getData = function () {
//   axios
//     .get("http://reactify.theironnetwork.org/data/vuely/todo.js")
//     .then(function (response) {
//       todo = response.data;
//     });
// };

router.get("/widgets/user-widgets", function (req, res, next) {
  res.render("widgets/user", {
    parent: "Widgets",
    title: "User",
    layout: "main",
    data: data,
  });
});

router.post("/widgets/chart-widgets", (req, res) => {
  let id = req.body.id;
  console.log(id);
  //hit API Here to complete the task.
  res.json({
    success: true,
  });
});

router.get("/widgets/chart-widgets", function (req, res, next) {
  res.render("widgets/charts", {
    parent: "Widgets",
    title: "Charts",
    layout: "main",
    data: data,
  });
});

router.get("/ecommerce/shop", function (req, res, next) {
  res.render("ecommerce/shop", {
    parent: "Ecommerce",
    title: "Shop",
    layout: "main",
    data: data,
  });
});

router.get("/tables/search-row", function (req, res, next) {
  res.render("tables/searchrow", {
    parent: "Tables",
    title: "Search Row",
    layout: "main",
    data: data,
  });
});

router.get("/clients/profile", function (req, res, next) {
  res.render("users/profile", {
    parent: "Users",
    title: "Profile",
    layout: "main",
    data: data,
  });
});

router.get("/clients/list", function (req, res, next) {
  res.render("users/list", {
    parent: "Users",
    title: "List",
    layout: "main",
    data: data,
  });
});

router.get("/calendar", function (req, res, next) {
  res.render("calendar", {
    title: "Calendar",
    layout: "main",
    data: data,
  });
});

function checkCurrentSession(req, res, next) {
  if (req.session.user) {
    return true;
  } else {
    req.session.error = "Access denied!";
    console.log(req.session.error);
    res.redirect("/session/login");
  }
}

router.get("/pages/pricing", function (req, res, next) {
  res.render("pages/pricing", {
    parent: "Pages",
    title: "Pricing",
    layout: "main",
    data: data,
  });
});

// Todo 首頁
// 列出全部 Todo
router.get("/widgets/toDoList", toDoController.getToDo);

// // TODO: 新增一筆 Todo
router.post("/widgets/toDoList/new", toDoController.postToDo);

// 刪除 Todo
router.delete("/widgets/toDoList/:id", toDoController.deleteToDo);

// 顯示一筆 Todo 的詳細內容
router.get("/widgets/toDoList/:id", (req, res) => {
  res.send("顯示 Todo 的詳細內容");
});
// 修改 Todo 頁面
router.get("/widgets/toDoList/:id/edit", (req, res) => {
  res.send("修改 Todo 頁面");
});

module.exports = router;
