const express = require("express");
const router = express.Router();
const firebase = require("firebase");
const data = require("../data");
const axios = require("axios");
const Auth0Strategy = require("passport-auth0");
const passport = require("passport");

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
  getData();
  res.render("dashboard/ecommerce", {
    title: "Node Xpress App",
    layout: "main",
    data: data,
  });
});

getData = function () {
  axios
    .get("http://reactify.theironnetwork.org/data/vuely/todo.js")
    .then(function (response) {
      todo = response.data;
    });
};

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

module.exports = router;
