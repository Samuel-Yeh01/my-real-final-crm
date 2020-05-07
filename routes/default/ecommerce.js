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

router.get("/ecommerce/cards", function (req, res, next) {
  res.render("ecommerce/cards", {
    parent: "Ecommerce",
    title: "Cards",
    layout: "main",
    data: data,
  });
});

router.get("/ecommerce/cart", function (req, res, next) {
  res.render("ecommerce/cart", {
    parent: "Ecommerce",
    title: "Cart",
    layout: "main",
    data: data,
  });
});

router.get("/ecommerce/checkout", function (req, res, next) {
  res.render("ecommerce/checkout", {
    parent: "Ecommerce",
    title: "Checkout",
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

router.get("/pages/blog", function (req, res, next) {
  res.render("pages/blog", {
    parent: "Pages",
    title: "Blog",
    layout: "main",
    data: data,
  });
});

router.get("/pages/gallery", function (req, res, next) {
  res.render("pages/gallery", {
    parent: "Pages",
    title: "Gallery",
    layout: "main",
    data: data,
  });
});

router.get("/pages/pricing", function (req, res, next) {
  res.render("pages/pricing", {
    parent: "Pages",
    title: "Pricing",
    layout: "main",
    data: data,
  });
});

router.get("/pages/blank", function (req, res, next) {
  res.render("pages/blank", {
    parent: "Pages",
    title: "Blank",
    layout: "main",
    data: data,
  });
});

router.get("/forms/form-validation", function (req, res, next) {
  res.render("forms/form-validation", {
    parent: "Forms",
    title: "Form Validation",
    layout: "main",
    data: data,
  });
});

router.get("/charts/express-chartjs", function (req, res, next) {
  res.render("charts/chartjs", {
    parent: "Charts",
    title: "Express Charts",
    layout: "main",
    data: data,
  });
});

router.get("/icons/themify", function (req, res, next) {
  res.render("icons/themify", {
    parent: "Icons",
    title: "Themify",
    layout: "main",
    data: data,
  });
});

router.get("/icons/material", function (req, res, next) {
  res.render("icons/material", {
    parent: "Icons",
    title: "Material",
    layout: "main",
    data: data,
  });
});

router.get("/tables/standard", function (req, res, next) {
  res.render("tables/standard", {
    parent: "Tables",
    title: "Standard",
    layout: "main",
    data: data,
  });
});

router.get("/tables/responsive-table", function (req, res, next) {
  res.render("tables/responsiveTable", {
    parent: "Tables",
    title: "Slots",
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

router.get("/maps/google-maps", function (req, res, next) {
  res.render("maps/googlemaps", {
    parent: "Maps",
    title: "Google Maps",
    layout: "main",
    data: data,
  });
});

router.get("/users/profile", function (req, res, next) {
  res.render("users/profile", {
    parent: "Users",
    title: "Profile",
    layout: "main",
    data: data,
  });
});

router.get("/users/list", function (req, res, next) {
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
