const express = require("express");
const createError = require("http-errors");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const Handlebar = require("handlebars");
const bodyParser = require("body-parser");
const favicon = require("express-favicon");
const session = require("express-session");
const i18n = require("i18n-express");
const minify = require("express-minify");
const passport = require("passport");
const compression = require("compression");
const Handlebars = require("./config/handlebars.config");
const dotenv = require("dotenv").config();
const helpers = require("./helpers/loadHelpers");
const firebaseDetails = require("./authentication/firebase/index");
// const auth0Details = require("./authentication/auth0/index");
// 引用 method-override
const methodOverride = require("method-override");

const app = express();

app.use(compression());

// parse application/json
app.use(bodyParser.json());
// setting body-parser
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
// 設定 method-override
app.use(methodOverride("_method"));

const indexRouter = require("./routes/index");

app.use(logger("dev"));

app.use(cookieParser());

app.use(cookieParser());
app.use(
  session({
    secret: "my session ID",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(express.static(path.join(__dirname, "public")));
app.use(favicon(__dirname + "/public/favicon.ico"));
app.use(function (req, res, next) {
  fullUrl = req.originalUrl;
  split_path = fullUrl.split("/");
  next();
});

// Handlebar URL helper
Handlebar.registerHelper("url", function (link) {
  return "/" + split_path[1] + link;
});

app.use(
  minify({
    jsMatch: /javascript/,
    jsMatch: /plugins/,
    cssMatch: /css/,
    cssMatch: /plugins/,
  })
);

app.use(
  i18n({
    translationsPath: path.join(__dirname, "lang"),
    // use here. Specify translations files path.
    siteLangs: ["en", "ja"], // can add new locales
    cookieLangName: "ulang",
    browserEnable: "true",
    textsVarName: "translation",
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/", indexRouter);

// Config Handlebars
Handlebars(app, __dirname + "/views");

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error", {
    title: "Node Xpress App",
    layout: "auth",
  });
});

module.exports = app;
