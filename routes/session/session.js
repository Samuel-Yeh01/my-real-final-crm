const express = require("express");
const router = express.Router();
const data = require("../data");
const firebase = require("firebase");
// const sess;
const Auth0Strategy = require("passport-auth0");
const passport = require("passport");

// Change code of the language to set the default language
const defaultLang = "?clang=en";

router.get("/session/signup", function (req, res, next) {
  if (req.session.user) {
    res.redirect("/default/dashboard/ecommerce" + defaultLang);
  } else {
    res.render("session/signup", {
      title: "Node Xpress App",
      layout: "auth",
      data: data,
    });
  }
});

router.get(
  "/loginwithauth0",
  passport.authenticate("auth0", {
    scope: "openid email profile",
  }),
  function (req, res) {}
);

router.get(
  "/callback",
  passport.authenticate("auth0", {
    failureRedirect: "/session/login",
  }),
  function (req, res) {
    req.session.user = req.user;
    res.redirect(
      req.session.returnTo || "/default/dashboard/ecommerce" + defaultLang
    );
  }
);
router.get("/session/login", function (req, res, next) {
  if (req.session.user) {
    res.redirect("/default/dashboard/ecommerce" + defaultLang);
  } else {
    res.render("session/login", {
      title: "Node Xpress App",
      layout: "auth",
      data: data,
    });
  }
});

router.post("/session/login", function (req, res, next) {
  firebase
    .auth()
    .signInWithEmailAndPassword(req.body.email, req.body.password)
    .then(
      function (user) {
        req.session.user = user;
        res.redirect("/default/dashboard/ecommerce" + defaultLang);
      },
      function (error) {
        if (error) {
          res.render("session/login", {
            title: "Node Xpress App",
            layout: "auth",
            Data: error.message,
          });
        }
      }
    );
});

router.post("/session/signup", function (req, res, next) {
  firebase
    .auth()
    .createUserWithEmailAndPassword(req.body.email, req.body.password)
    .then(
      function (user) {
        req.session.user = user;
        res.redirect("/default/dashboard/ecommerce" + defaultLang);
      },
      function (error) {
        res.render("session/signup", {
          title: "Node Xpress App",
          layout: "auth",
          Data: error.code,
        });
      }
    );
});

router.post("/session/logout", function (req, res, next) {
  req.session.user = "";
  res.redirect("/session/login");
});

router.get("/session/lockscreen", function (req, res, next) {
  res.render("session/lockscreen", {
    title: "Node Xpress App",
    layout: "auth",
  });
});

router.post("/session/forgot-password", function (req, res, next) {
  firebase
    .auth()
    .sendPasswordResetEmail(req.body.email)
    .then(function () {
      res.redirect("/session/login");
    })
    .catch(function (error) {
      res.render("session/forget-password", {
        title: "Node Xpress App",
        layout: "auth",
        Data: error.code,
      });
    });
});

router.get("/session/forgot-password", function (req, res, next) {
  if (req.session.user) {
    res.redirect("/default/dashboard/ecommerce" + defaultLang);
  } else {
    res.render("session/forget-password", {
      title: "Node Xpress App",
      layout: "auth",
      data: data,
    });
  }
});

router.get("/session/reset-password", function (req, res, next) {
  if (req.session.user) {
    res.redirect("/default/dashboard/ecommerce" + defaultLang);
  } else {
    res.render("session/reset-password", {
      title: "Node Xpress App",
      layout: "auth",
      data: data,
    });
  }
});

module.exports = router;
